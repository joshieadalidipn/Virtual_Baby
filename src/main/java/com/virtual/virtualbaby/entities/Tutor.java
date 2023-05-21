package com.virtual.virtualbaby.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tutor")
@PrimaryKeyJoinColumn(referencedColumnName = "id_usuario")
public class Tutor extends Usuario {
    @Column(name = "fecha_bautizo")
    private LocalDate fechaBautizo;
    @Column(name = "telefono_trabajo")
    private String telefonoTrabajo;
    @Column(name = "domicilio_trabajo")
    private String domicilioTrabajo;
    @Column(name = "foto")
    private String foto;
}
