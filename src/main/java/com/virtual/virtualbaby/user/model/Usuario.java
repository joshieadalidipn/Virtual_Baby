package com.virtual.virtualbaby.user.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String primerApellido;
    private String segundoApellido;
    private String email;
    private String telefonoCasa;
    private String telefonoCelular;
    private String password;
    private String rfc;
    private String domicilio;
    private String curp;
    private Character sexo;
    private LocalDate fechaNacimiento;
}