package com.virtual.virtualbaby.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    private final TutorRepository tutorRepository;

    // Inyección de dependencias mediante el constructor
    @Autowired
    public UsuarioService(TutorRepository tutorRepository) {
        this.tutorRepository = tutorRepository;
    }

    public Role getRole(Usuario usuario) {
        Integer id = usuario.getId_usuario();
        if (tutorRepository.existsById(id)) {
            return Role.ROLE_TUTOR;
        }else{
            return Role.ROLE_USUARIO;
        }
    }
}