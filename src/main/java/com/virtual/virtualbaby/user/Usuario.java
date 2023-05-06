package com.virtual.virtualbaby.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Usuario")
public class Usuario implements UserDetails {
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

    @Enumerated(EnumType.STRING)
    private Role role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
