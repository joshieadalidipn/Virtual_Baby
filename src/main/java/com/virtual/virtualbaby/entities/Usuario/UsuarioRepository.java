package com.virtual.virtualbaby.entities.Usuario;

import com.virtual.virtualbaby.entities.Usuario.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario,Integer> {
    Optional<Usuario> findUsuarioByEmail(String email);

}