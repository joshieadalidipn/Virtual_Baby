package com.virtual.virtualbaby.usuario.model;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@PrimaryKeyJoinColumn(referencedColumnName = "id")

public class TrabajadorSocial extends Usuario {

}
