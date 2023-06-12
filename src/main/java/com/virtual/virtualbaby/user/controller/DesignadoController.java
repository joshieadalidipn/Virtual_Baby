package com.virtual.virtualbaby.user.controller;

import com.virtual.virtualbaby.auth.security.JwtService;
import com.virtual.virtualbaby.infante.model.Infante;
import com.virtual.virtualbaby.infante.repository.InfanteRepository;
import com.virtual.virtualbaby.user.model.Usuario;
import com.virtual.virtualbaby.user.repository.UsuarioRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/designado")
@RequiredArgsConstructor
public class DesignadoController {
    private final UsuarioRepository usuarioRepository;
    private final InfanteRepository infanteRepository;
    private final JwtService jwtService;


    @GetMapping("/infantes")
    public ResponseEntity<List<Infante>> getInfantesByTutor(HttpServletRequest request) {
        String jwt = jwtService.extractJwtFromRequest(request);
        String email = jwtService.extractEmail(jwt);

        // Buscar al usuario en la base de datos y lanzar una excepción si no se encuentra
        Usuario user = usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Tutor no encontrado"));

        return ResponseEntity.ok(infanteRepository.findByTutor(user));
    }


}
