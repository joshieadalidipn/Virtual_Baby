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
@Entity(name = "capital_humano")
@PrimaryKeyJoinColumn(referencedColumnName = "id")
public class CapitalHumano extends Usuario {

}
