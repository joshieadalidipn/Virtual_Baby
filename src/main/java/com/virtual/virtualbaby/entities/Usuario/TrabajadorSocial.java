package com.virtual.virtualbaby.entities.Usuario;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "trabajador_social")
@PrimaryKeyJoinColumn(referencedColumnName = "id")

public class TrabajadorSocial extends Usuario {

}
