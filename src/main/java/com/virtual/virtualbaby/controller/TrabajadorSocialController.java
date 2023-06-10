package com.virtual.virtualbaby.controller;

import com.virtual.virtualbaby.entities.Infante;
import com.virtual.virtualbaby.entities.InfanteRepository;
import com.virtual.virtualbaby.entities.Usuario.Tutor;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/trabajadorSocial")
public class TrabajadorSocialController {

    public final InfanteRepository infanteRepository;
    @PreAuthorize("hasAuthority('TRABAJADOR_SOCIAL')")
    @PostMapping("/infante")
    public ResponseEntity<String> registerInfante(@RequestBody Infante infante) {
        infanteRepository.save(infante);
        return ResponseEntity.ok("Infante registrado");
    }
}
