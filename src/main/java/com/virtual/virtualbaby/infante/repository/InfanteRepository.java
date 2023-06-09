package com.virtual.virtualbaby.infante.repository;

import com.virtual.virtualbaby.infante.model.Infante;
import com.virtual.virtualbaby.usuario.model.Tutor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InfanteRepository extends JpaRepository<Infante, Long> {
    List<Infante> findByTutor(Tutor tutor);
}
