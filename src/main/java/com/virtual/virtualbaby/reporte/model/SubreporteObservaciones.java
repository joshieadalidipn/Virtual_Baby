package com.virtual.virtualbaby.reporte.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class SubreporteObservaciones {
    @Id
    private Integer id;
    @ManyToOne
    @JoinColumn(nullable = false)
    private ReporteDiario reporteDiario;
    @Column(nullable = false)
    private LocalTime hora;
    private String descripcion;
}
