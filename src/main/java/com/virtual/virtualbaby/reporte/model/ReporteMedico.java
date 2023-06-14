package com.virtual.virtualbaby.reporte.model;

import com.virtual.virtualbaby.infante.model.Infante;
import com.virtual.virtualbaby.usuario.model.Medico;
import jakarta.persistence.*;

import java.time.LocalDate;

public class ReporteMedico {
    @Id
    @GeneratedValue
    Long id;
    @Column(nullable = false)
    LocalDate fecha;
    @Column(nullable = false)
    String description;
    @ManyToOne
    @JoinColumn(nullable = false)
    private Infante infante;
    @ManyToOne
    @JoinColumn(nullable = false)
    private Medico medico;
}
