package com.virtual.virtualbaby.user;

import com.virtual.virtualbaby.entities.Usuario.Usuario;
import com.virtual.virtualbaby.entities.Usuario.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
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
        Usuario usuario = usuarioRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado: " + username));

        List<Role> roles = usuarioService.getRoles(usuario);
        return new User(usuario.getEmail(), usuario.getPassword(), toSimpleGrantedAuthorities(roles));
    }


    public UserDetails userToUserDetails(Usuario usuario) {
        List<Role> roles = usuarioService.getRoles(usuario);
        return new User(usuario.getEmail(), usuario.getPassword(), toSimpleGrantedAuthorities(roles));
    }
}
