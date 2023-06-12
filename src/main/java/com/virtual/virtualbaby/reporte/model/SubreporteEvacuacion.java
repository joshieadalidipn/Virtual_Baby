package com.virtual.virtualbaby.reporte.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;


@Data
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class SubreporteEvacuacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(nullable = false)
    private ReporteDiario reporteDiario;
    private LocalTime hora;
    private String tipoEvacuacion;
    private String observaciones;

}