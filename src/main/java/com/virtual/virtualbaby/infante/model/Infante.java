package com.virtual.virtualbaby.infante.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
    Integer id;
    Integer idGrupo;
    Integer idTutor;
    String nombre;
    String primerApellido;
    String segundoApellido;
    LocalDate fechaNacimiento;
    String sexo;
    String formaParto;
    String alergias;
    String padecimientos;
    String enfermedades;
    String peso;
    String talla;
    String altura;
    String curp;
    String viveCon;
    Integer numeroHermanos;
    String colorAlma;
    URL familiograma;
}

