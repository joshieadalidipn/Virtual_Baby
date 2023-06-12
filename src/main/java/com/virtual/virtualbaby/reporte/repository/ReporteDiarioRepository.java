package com.virtual.virtualbaby.reporte.repository;

import com.virtual.virtualbaby.infante.model.Infante;
import com.virtual.virtualbaby.reporte.model.ReporteDiario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReporteDiarioRepository extends JpaRepository<ReporteDiario, Long> {
    List<ReporteDiario> findByInfante(Infante infante);
}
