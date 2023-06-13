package com.virtual.virtualbaby.usuario.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Medico {
    @Id
    @GeneratedValue
    private Long id;
    @OneToOne//(cascade = CascadeType.ALL)
    @JoinColumn(referencedColumnName = "id")
    private Usuario usuario;
}
