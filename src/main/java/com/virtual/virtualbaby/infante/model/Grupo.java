package com.virtual.virtualbaby.infante.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Grupo {

    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    private Salon salon;
    private String nombre;
}
