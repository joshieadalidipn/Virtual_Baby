package com.virtual.virtualbaby.user.model;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity(name = "trabajador_social")
@PrimaryKeyJoinColumn(referencedColumnName = "id")

public class TrabajadorSocial extends Usuario {

}