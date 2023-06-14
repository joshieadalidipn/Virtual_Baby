package com.virtual.virtualbaby.reporte.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
    @GeneratedValue
    private Integer id;
    @JsonBackReference
    @ManyToOne
    @JoinColumn(nullable = false)
    private ReporteDiario reporteDiario;
    private LocalTime hora;
    private String descripcion;
}
