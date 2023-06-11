package com.virtual.virtualbaby.infante;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@Table(name = "infante")
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Infante {
    @Column(name = "id")
    @Id
    Integer id;

    @Column(name = "id_grupo")
    Integer idGrupo;

    @Column(name = "id_tutor")
    Integer idTutor;

    @Column(name = "nombre")
    String nombre;

    @Column(name = "primer_apellido")
    String primerApellido;

    @Column(name = "segundo_apellido")
    String segundoApellido;

    @Column(name = "fecha_nacimiento")
    LocalDate fechaNacimiento;

    @Column(name = "sexo")
    String sexo;

    @Column(name = "forma_parto")
    String formaParto;

    @Column(name = "alergias")
    String alergias;

    @Column(name = "padecimientos")
    String padecimientos;

    @Column(name = "enfermedades")
    String enfermedades;

    @Column(name = "peso")
    String peso;

    @Column(name = "talla")
    String talla;

    @Column(name = "altura")
    String altura;

    @Column(name = "curp")
    String curp;

    @Column(name = "vive_con")
    String viveCon;

    @Column(name = "numero_hermanos")
    Integer numeroHermanos;

    @Column(name = "color_alma")
    String colorAlma;
}
