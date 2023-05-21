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
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UsuarioDetailsService implements UserDetailsService {
    private final UsuarioRepository usuarioRepository;
    private final UsuarioService usuarioService;

    public List<SimpleGrantedAuthority> toSimpleGrantedAuthorities(List<Role> roles) {
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.name())).collect(Collectors.toList());
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Usuario> usuario = usuarioRepository.findUsuarioByEmail(username);
        if (usuario.isEmpty()) {
            throw new UsernameNotFoundException("User not found: " + username);
        }
        List<Role> roles = usuarioService.getRoles(usuario.get());
        return new User(usuario.get().getEmail(), usuario.get().getPassword(), toSimpleGrantedAuthorities(roles));
    }

    public UserDetails fromUsuario(Usuario usuario) {
        List<Role> roles = usuarioService.getRoles(usuario);
        return new User(usuario.getEmail(), usuario.getPassword(), toSimpleGrantedAuthorities(roles));
    }
}
