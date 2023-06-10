package com.virtual.virtualbaby.user.model;

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
@Entity(name="usuario")
@Inheritance(strategy = InheritanceType.JOINED)
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "primer_apellido")
    private String primerApellido;

    @Column(name = "segundo_apellido")
    private String segundoApellido;

    @Column(name = "email")
    private String email;

    @Column(name = "telefono_casa")
    private String telefonoCasa;

    @Column(name = "telefono_celular")
    private String telefonoCelular;

    @Column(name = "password")
    private String password;

    @Column(name = "rfc")
    private String rfc;

    @Column(name = "domicilio")
    private String domicilio;

    @Column(name = "curp")
    private String curp;

    @Column(name = "sexo")
    private Character sexo;

    @Column(name = "fecha_nacimiento")
    private LocalDate fechaNacimiento;

    @Override
    public String toString() {
        return """
                Usuario{idUsuario=%d,
                nombreUsuario='%s',
                primerApellido='%s',
                segundoApellido='%s',
                email='%s',
                telefonoCasa='%s',
                telefonoCelular='%s',
                password='%s',
                rfc='%s',
                domicilio='%s',
                curp='%s',
                sexo='%s',
                fechaNacimiento=%s}""".formatted(id, nombre, primerApellido, segundoApellido, email, telefonoCasa, telefonoCelular, password, rfc, domicilio, curp, sexo, fechaNacimiento);
    }
}