package com.virtual.virtualbaby.usuario.service;

import com.virtual.virtualbaby.role.Role;
import com.virtual.virtualbaby.usuario.model.Usuario;
import com.virtual.virtualbaby.usuario.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UsuarioService {
    private final DesignadoRepository tutorRepository;
    private final TrabajadorSocialRepository trabajadorSocialRepository;
    private final CapitalHumanoRepository capitalHumanoRepository;
    private final DocenteRepository docenteRepository;
    private final MedicoRepository medicoRepository;

    public List<Role> getRoles(Usuario usuario) {
        List<Role> roles = new ArrayList<>();
        Long id = usuario.getId();

        if (existsInRepository(tutorRepository, id)) {
            roles.add(Role.TUTOR);
        }

        if (existsInRepository(trabajadorSocialRepository, id)) {
            roles.add(Role.TRABAJADOR_SOCIAL);
        }

        if (existsInRepository(capitalHumanoRepository, id)) {
            roles.add(Role.CAPITAL_HUMANO);
        }

        if (existsInRepository(docenteRepository, id)) {
            roles.add(Role.DOCENTE);
        }

        if (existsInRepository(medicoRepository, id)) {
            roles.add(Role.MEDICO);
        }

        return roles;
    }

    private boolean existsInRepository(JpaRepository<?, Long> repository, Long id) {
        return repository.existsById(id);
    }

}
