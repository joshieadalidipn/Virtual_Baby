package com.virtual.virtualbaby.auth;

import com.virtual.virtualbaby.config.JwtService;
import com.virtual.virtualbaby.user.Role;
import com.virtual.virtualbaby.user.UserRepository;
import com.virtual.virtualbaby.user.Usuario;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var usuario = Usuario.builder()
                .nombre_usuario(request.getNombre())
                .primer_apellido(request.getPrimer_apellido())
                .segundo_apellido(request.getSegundo_apellido())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        repository.save(usuario);

        var jwt = jwtService.generateToken(usuario);
        return AuthenticationResponse
                .builder()
                .token(jwt)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        // Se autenticó
        var usuario = repository.findUsuarioByEmail(request.getEmail()).orElseThrow();
        var jwt = jwtService.generateToken(usuario);
        return AuthenticationResponse
                .builder()
                .token(jwt)
                .build();
    }
}
