package com.virtual.virtualbaby.user;

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
    private LocalDate fecha_bautizo;
    private String telefono_trabajo;
    private String domicilio_trabajo;
    private String foto;
}
