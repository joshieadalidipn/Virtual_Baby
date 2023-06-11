package com.virtual.virtualbaby.user.controller;

import com.virtual.virtualbaby.user.repository.CapitalHumanoRepository;
import com.virtual.virtualbaby.user.model.Usuario;
import com.virtual.virtualbaby.user.repository.UsuarioRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/capitalHumano")
public class CapitalHumanoController {

    public final CapitalHumanoRepository capitalHumanoRepository;
    public final UsuarioRepository usuarioRepository;

    @PreAuthorize("hasAuthority('CAPITAL_HUMANO')")
    @GetMapping("/usuarios")
    public ResponseEntity<List<Usuario>> getUsers(){
        return ResponseEntity.ok(usuarioRepository.findAll());
    }
}
