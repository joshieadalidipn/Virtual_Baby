package com.virtual.virtualbaby.auth;

import com.virtual.virtualbaby.config.JwtService;
import com.virtual.virtualbaby.entities.Usuario.Usuario;
import com.virtual.virtualbaby.entities.Usuario.UsuarioRepository;
import com.virtual.virtualbaby.user.UsuarioDetailsService;
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

    public String register(Usuario usuario){
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
        usuarioRepository.save(usuario);
        return jwtService.generateToken(usuarioDetailsService.userToUserDetails(usuario));
    }

    public String login(Usuario usuario) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        usuario.getEmail(),
                        usuario.getPassword()
                )
        );

        return jwtService.generateToken(usuarioDetailsService.loadUserByUsername(usuario.getEmail()));
    }

}
