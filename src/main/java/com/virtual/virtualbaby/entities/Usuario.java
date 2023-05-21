package com.virtual.virtualbaby.entities;

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
@Inheritance(strategy = InheritanceType.JOINED)
@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Integer idUsuario;

    @Column(name = "nombre_usuario")
    private String nombreUsuario;

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
    private String sexo;

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
                fechaNacimiento=%s}""".formatted(idUsuario, nombreUsuario, primerApellido, segundoApellido, email, telefonoCasa, telefonoCelular, password, rfc, domicilio, curp, sexo, fechaNacimiento);
    }
}
