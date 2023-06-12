package com.virtual.virtualbaby.infante.model;

import com.virtual.virtualbaby.user.model.Usuario;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.net.URL;
import java.time.LocalDate;

@Data
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Infante {
    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    @JoinColumn(nullable = false)
    private Grupo grupo;
    @ManyToOne
    @JoinColumn(nullable = false)
    private Usuario tutor;
    private String nombre;
    private String primerApellido;
    private String segundoApellido;
    private LocalDate fechaNacimiento;
    private String sexo;
    private String formaParto;
    private String alergias;
    private String padecimientos;
    private String enfermedades;
    private String peso;
    private String talla;
    private String altura;
    private String curp;
    private String viveCon;
    private Integer numeroHermanos;
    private String colorAlma;
    private URL familiograma;
}

