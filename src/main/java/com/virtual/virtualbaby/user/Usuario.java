package com.virtual.virtualbaby.user;

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
    private Integer id_usuario;

    @Column(name = "nombre_usuario")
    private String nombre_usuario;

    @Column(name = "primer_apellido")
    private String primer_apellido;

    @Column(name = "segundo_apellido")
    private String segundo_apellido;

    @Column(name = "email")
    private String email;

    @Column(name = "telefono_casa")
    private String telefono_casa;

    @Column(name = "telefono_celular")
    private String telefono_celular;

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
    private LocalDate fecha_nacimiento;

    @Override
    public String toString() {
        return """
                Usuario{id_usuario=%d,
                nombre_usuario='%s',
                primer_apellido='%s',
                segundo_apellido='%s',
                email='%s',
                telefono_casa='%s',
                telefono_celular='%s',
                password='%s',
                rfc='%s',
                domicilio='%s',
                curp='%s',
                sexo='%s',
                fecha_nacimiento=%s}""".formatted(id_usuario, nombre_usuario, primer_apellido, segundo_apellido, email, telefono_casa, telefono_celular, password, rfc, domicilio, curp, sexo, fecha_nacimiento);
    }
}
