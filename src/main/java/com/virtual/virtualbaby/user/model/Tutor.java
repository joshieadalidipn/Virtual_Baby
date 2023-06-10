package com.virtual.virtualbaby.user.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
import jakarta.persistence.PrimaryKeyJoinColumn;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="tutor")
@PrimaryKeyJoinColumn(referencedColumnName = "id")
public class Tutor extends Usuario {
    @Column(name = "fecha_bautizo")
    private LocalDate fechaBautizo;
    @Column(name = "telefono_trabajo")
    private String telefonoTrabajo;
    @Column(name = "domicilio_trabajo")
    private String domicilioTrabajo;
    @Column(name = "foto",columnDefinition = "bytea")
    @Lob
    private byte[] foto;
}
