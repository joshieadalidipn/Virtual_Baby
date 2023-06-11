package com.virtual.virtualbaby.infante.controller;

import com.virtual.virtualbaby.infante.Infante;
import com.virtual.virtualbaby.infante.InfanteRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/infante")
@AllArgsConstructor
public class InfanteController {
    private final InfanteRepository infanteRepository;

    @PreAuthorize("hasAnyAuthority('DOCENTE', 'TUTOR')")
    @GetMapping("/{id}")
    public ResponseEntity<Infante> getInfanteById(@PathVariable Integer id) {
        Optional<Infante> optionalInfante = infanteRepository.findById(id);
        return optionalInfante.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PreAuthorize("hasAnyAuthority('DOCENTE')")
    @GetMapping("/")
    public ResponseEntity<List<Infante>> getAllInfantes() {
        List<Infante> infantes = infanteRepository.findAll();
        return ResponseEntity.ok(infantes);
    }

}
