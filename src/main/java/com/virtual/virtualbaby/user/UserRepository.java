package com.virtual.virtualbaby.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<Usuario,Integer> {
    Optional<Usuario> findUsuarioByEmail(String email);
}
