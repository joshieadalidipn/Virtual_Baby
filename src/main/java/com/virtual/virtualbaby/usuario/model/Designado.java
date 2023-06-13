package com.virtual.virtualbaby.usuario.model;

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
public class Designado {
    @Id
    @GeneratedValue
    private Long id;

    @OneToOne//(cascade = CascadeType.ALL)
    @JoinColumn(referencedColumnName = "id")
    private Usuario usuario;

    private LocalDate fechaBautizo;
    private String telefonoTrabajo;
    private String domicilioTrabajo;
    private byte[] foto;
}
