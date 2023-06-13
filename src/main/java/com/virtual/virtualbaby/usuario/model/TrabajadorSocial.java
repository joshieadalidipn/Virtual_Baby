package com.virtual.virtualbaby.usuario.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class TrabajadorSocial {

    @Id
    @GeneratedValue
    private Long id;

    @OneToOne//(cascade = CascadeType.ALL)
    @JoinColumn(referencedColumnName = "id")
    private Usuario usuario;
}
