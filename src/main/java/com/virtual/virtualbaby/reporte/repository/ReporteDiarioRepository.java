package com.virtual.virtualbaby.reporte.repository;

import com.virtual.virtualbaby.infante.model.Infante;
import com.virtual.virtualbaby.reporte.model.ReporteDiario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface ReporteDiarioRepository extends JpaRepository<ReporteDiario, Long> {
    List<ReporteDiario> findAllByInfante(Infante infante);

    List<ReporteDiario> findAllByInfanteIdAndFecha(Long id, LocalDate fecha);

    List<ReporteDiario> findAllByFecha(LocalDate fecha);
}
