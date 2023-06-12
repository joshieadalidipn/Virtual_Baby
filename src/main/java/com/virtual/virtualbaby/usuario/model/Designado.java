package com.virtual.virtualbaby.usuario.model;

import jakarta.persistence.Entity;
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
@Entity
@PrimaryKeyJoinColumn(referencedColumnName = "id")
public class Designado extends Usuario {
    private LocalDate fechaBautizo;
    private String telefonoTrabajo;
    private String domicilioTrabajo;
    private byte[] foto;
}
