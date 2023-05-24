package com.virtual.virtualbaby.user;

import com.virtual.virtualbaby.entities.Usuario.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;
    private final TutorRepository tutorRepository;
    private final TrabajadorSocialRepository trabajadorSocialRepository;
    private final CapitalHumanoRepository capitalHumanoRepository;
    private final DocenteRepository docenteRepository;
    private final MedicoRepository medicoRepository;

    public List<Role> getRoles(Usuario usuario) {
        List<Role> roles = new ArrayList<>();
        Integer id = usuario.getId();

        if (existsInRepository(usuarioRepository, id)) {
            roles.add(Role.ROLE_USUARIO);
        }

        if (existsInRepository(tutorRepository, id)) {
            roles.add(Role.ROLE_TUTOR);
        }

        if (existsInRepository(trabajadorSocialRepository, id)) {
            roles.add(Role.ROLE_TRABAJADOR_SOCIAL);
        }

        if (existsInRepository(capitalHumanoRepository, id)) {
            roles.add(Role.ROLE_CAPITAL_HUMANO);
        }

        if (existsInRepository(docenteRepository, id)) {
            roles.add(Role.ROLE_DOCENTE);
        }

        if (existsInRepository(medicoRepository, id)) {
            roles.add(Role.ROLE_MEDICO);
        }

        return roles;
    }

    private boolean existsInRepository(JpaRepository<?, Integer> repository, Integer id) {
        return repository.existsById(id);
    }

}
