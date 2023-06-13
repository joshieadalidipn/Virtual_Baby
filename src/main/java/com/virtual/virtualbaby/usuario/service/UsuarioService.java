package com.virtual.virtualbaby.usuario.service;

import com.virtual.virtualbaby.role.Role;
import com.virtual.virtualbaby.usuario.model.Usuario;
import com.virtual.virtualbaby.usuario.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Service
public class UsuarioService {
    private final TutorRepository tutorRepository;
    private final TrabajadorSocialRepository trabajadorSocialRepository;
    private final CapitalHumanoRepository capitalHumanoRepository;
    private final DocenteRepository docenteRepository;
    private final MedicoRepository medicoRepository;

    public List<Role> getRoles(Usuario usuario) {
        Long id = usuario.getId();
        List<Role> roles = new ArrayList<>();

        Map<JpaRepository<?, Long>, Role> repositoryRoleMap = Map.of(tutorRepository, Role.TUTOR, trabajadorSocialRepository, Role.TRABAJADOR_SOCIAL, capitalHumanoRepository, Role.CAPITAL_HUMANO, docenteRepository, Role.DOCENTE, medicoRepository, Role.MEDICO);

        for (Map.Entry<JpaRepository<?, Long>, Role> entry : repositoryRoleMap.entrySet()) {
            if (entry.getKey().existsById(id)) {
                roles.add(entry.getValue());
            }
        }

        return roles;
    }
}
