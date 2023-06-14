package com.virtual.virtualbaby.usuario.controller;

import com.virtual.virtualbaby.auth.security.JwtService;
import com.virtual.virtualbaby.usuario.model.Usuario;
import com.virtual.virtualbaby.usuario.repository.CapitalHumanoRepository;
import com.virtual.virtualbaby.usuario.repository.UsuarioRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/usuarios")
public class UsuarioController {
    private final JwtService jwtService;
    UsuarioRepository usuarioRepository;
    public final CapitalHumanoRepository capitalHumanoRepository;

    @PreAuthorize("hasAuthority('CAPITAL_HUMANO')")
    @GetMapping("/")
    public ResponseEntity<List<Usuario>> getUsers() {
        return ResponseEntity.ok(usuarioRepository.findAll());
    }

    @GetMapping("/self")
    public ResponseEntity<Usuario> getData(HttpServletRequest request) {
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
