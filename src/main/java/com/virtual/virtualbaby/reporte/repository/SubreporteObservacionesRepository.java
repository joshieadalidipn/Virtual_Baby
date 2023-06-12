package com.virtual.virtualbaby.reporte.repository;

import com.virtual.virtualbaby.reporte.model.SubreporteEvacuacion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubreporteObservacionesRepository extends JpaRepository<SubreporteEvacuacion, Long> {
}
