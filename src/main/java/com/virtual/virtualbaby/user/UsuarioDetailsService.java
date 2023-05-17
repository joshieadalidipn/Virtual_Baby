package com.virtual.virtualbaby.user;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class UsuarioDetailsService implements UserDetailsService {
    private final UsuarioRepository usuarioRepository;
    private final UsuarioService usuarioService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Usuario> usuario = usuarioRepository.findUsuarioByEmail(username);
        if (usuario.isEmpty()) {
            throw new UsernameNotFoundException("User not found: " + username);
        }
        Role role = usuarioService.getRole(usuario.get());
        return new User(usuario.get().getEmail(), usuario.get().getPassword(), List.of(new SimpleGrantedAuthority(role.name())));
    }
}
