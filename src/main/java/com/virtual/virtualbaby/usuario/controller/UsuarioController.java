package com.virtual.virtualbaby.usuario.controller;

import com.virtual.virtualbaby.auth.security.JwtService;
import com.virtual.virtualbaby.usuario.model.Usuario;
import com.virtual.virtualbaby.usuario.repository.UsuarioRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
@RestController
@AllArgsConstructor
@RequestMapping("/usuario")
public class UsuarioController {
    private final JwtService jwtService;
    UsuarioRepository usuarioRepository;
    private static final Logger logger = LoggerFactory.getLogger(CapitalHumanoController.class);

    @GetMapping("/")
    public ResponseEntity<Usuario> getData(HttpServletRequest request) {
        logger.info("Se recibió una petición en /usuario");
        String jwt = jwtService.extractJwtFromRequest(request);
        String email = jwtService.extractEmail(jwt);

        // Buscar al usuario en la base de datos
        Optional<Usuario> userOpt = usuarioRepository.findByEmail(email);

        // Si el usuario no se encontró, lanzar una excepción
        Usuario user = userOpt.orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));

        // ... hacer algo con 'user' ...

        return ResponseEntity.ok(user);
    }
}
