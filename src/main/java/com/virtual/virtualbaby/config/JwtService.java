package com.virtual.virtualbaby.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.function.Function;

@Service
public class JwtService {

    @Value("${jwt.secretKey}")
    private String SECRET_KEY;

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails) {
        Instant now = Instant.now();

        // Crear las claims adicionales
        Map<String, Object> claims = new HashMap<>();
        claims.put("roles", userDetails.getAuthorities());

        // Agregar las claims adicionales al mapa de extraClaims
        extraClaims.putAll(claims);

        return Jwts.builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(Date.from(now))
                .setExpiration(Date.from(now.plus(1, ChronoUnit.DAYS)))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }


    public boolean isTokenValid(String token) {
        return !isTokenExpired(token);
    }


    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private boolean isTokenExpired(String token) {
        Instant now = Instant.now(); // Obtener el momento actual en UTC
        return extractExpiration(token).before(Date.from(now));
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public List<String> extractRoles(String token) {
        final Claims claims = extractAllClaims(token);

        // Verificar que la claim "roles" es una lista
        if (!(claims.get("roles") instanceof List<?> rolesObjectList)) {
            throw new IllegalStateException("La claim 'roles' no es una lista.");
        }

        List<String> roles = new ArrayList<>();

        for (Object roleObject : rolesObjectList) {
            // Verificar que el objeto es un mapa
            if (!(roleObject instanceof Map<?, ?> roleMap)) {
                throw new IllegalStateException("El role no es un mapa.");
            }

            // Verificar que la clave "authority" existe y su valor es una cadena
            if (!roleMap.containsKey("authority") || !(roleMap.get("authority") instanceof String)) {
                throw new IllegalStateException("La clave 'authority' no existe o su valor no es una cadena.");
            }

            roles.add((String) roleMap.get("authority"));
        }

        return roles;
    }


    public Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String extractJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }

    public String extractEmail(String token) {
        return extractUsername(token); //asumiendo que el "subject" del token es el correo electrónico.
    }
}
