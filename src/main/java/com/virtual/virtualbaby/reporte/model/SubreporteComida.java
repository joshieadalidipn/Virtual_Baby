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
public class SubreporteComida {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(nullable = false)
    private ReporteDiario reporteDiario;

    private LocalTime horaComida;
    private String comida;
    private int cantidad;
}
