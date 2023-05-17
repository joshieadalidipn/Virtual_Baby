package com.virtual.virtualbaby.user;

import jakarta.persistence.*;
import lombok.*;

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
