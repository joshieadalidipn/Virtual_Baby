package com.virtual.virtualbaby.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UsuarioService {

    private final TutorRepository tutorRepository;
    private final UsuarioRepository usuarioRepository;


    public List<Role> getRoles(Usuario usuario) {
        List<Role> roles = new ArrayList<>();
        Integer id = usuario.getId_usuario();

        if (usuarioRepository.existsById(id)){
            roles.add(Role.ROLE_USUARIO);
        }

        if (tutorRepository.existsById(id)) {
            roles.add(Role.ROLE_TUTOR);
        }

        return roles;
    }
}