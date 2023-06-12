package com.virtual.virtualbaby.infante.repository;

import com.virtual.virtualbaby.infante.model.Infante;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InfanteRepository extends JpaRepository<Infante,Integer> {
    List<Infante> findByIdTutor(Integer idTutor);
}
