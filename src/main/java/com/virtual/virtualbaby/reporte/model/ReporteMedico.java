package com.virtual.virtualbaby.reporte.model;

import com.virtual.virtualbaby.infante.model.Infante;
import com.virtual.virtualbaby.user.model.Medico;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.time.LocalDate;

public class ReporteMedico {
    @Id
    Integer id;
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
