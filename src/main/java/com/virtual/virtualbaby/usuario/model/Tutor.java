package com.virtual.virtualbaby.usuario.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Tutor {
    @Id
    @GeneratedValue
    private Long id;

    @OneToOne
    @JoinColumn(name = "id")
    private Usuario usuario;

}