package com.virtual.virtualbaby.auth;

import com.virtual.virtualbaby.config.JwtService;
import com.virtual.virtualbaby.user.Usuario;
import com.virtual.virtualbaby.user.UsuarioDetailsService;
import com.virtual.virtualbaby.user.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final UsuarioDetailsService usuarioDetailsService;

    public AuthenticationResponse register(RegisterRequest request) {
        Usuario usuario = Usuario.builder()
                .nombre_usuario(request.getNombre())
                .primer_apellido(request.getPrimer_apellido())
                .segundo_apellido(request.getSegundo_apellido())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();
        usuarioRepository.save(usuario);

        String jwt = jwtService.generateToken(usuarioDetailsService.loadUserByUsername(usuario.getEmail()));
        return AuthenticationResponse
                .builder()
                .token(jwt)
                .build();
    }

    public AuthenticationResponse authenticate(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        // Se autenticó
        Usuario usuario = usuarioRepository.findUsuarioByEmail(request.getEmail()).orElseThrow();
        String jwt = jwtService.generateToken(usuarioDetailsService.loadUserByUsername(usuario.getEmail()));
        return AuthenticationResponse
                .builder()
                .token(jwt)
                .build();
    }
}
