package com.virtual.virtualbaby.entities.Usuario;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity(name = "capital_humano")
@PrimaryKeyJoinColumn(referencedColumnName = "id")
public class CapitalHumano extends Usuario {

}
