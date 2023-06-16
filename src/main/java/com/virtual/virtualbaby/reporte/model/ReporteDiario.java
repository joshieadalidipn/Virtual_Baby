package com.virtual.virtualbaby.reporte.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.virtual.virtualbaby.infante.model.Infante;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Data
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class ReporteDiario {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Infante infante;
    private LocalDate fecha;
    private LocalTime horaEntrada;
    private LocalTime horaSalida;

    // Agregamos las relaciones con las entidades Subreporte
    @JsonManagedReference
    @OneToMany(mappedBy = "reporteDiario")
    private List<SubreporteComida> subreportesComida;
    @JsonManagedReference
    @OneToMany(mappedBy = "reporteDiario")
    private List<SubreporteEvacuacion> subreportesEvacuacion;
    @JsonManagedReference
    @OneToMany(mappedBy = "reporteDiario")
    private List<SubreporteObservaciones> subreportesObservaciones;
}

