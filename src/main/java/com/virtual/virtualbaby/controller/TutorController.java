package com.virtual.virtualbaby.controller;

import com.virtual.virtualbaby.entities.Tutor;
import com.virtual.virtualbaby.entities.TutorRepository;
import com.virtual.virtualbaby.entities.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tutor")
@RequiredArgsConstructor
public class TutorController {
    public final UsuarioRepository usuarioRepository;
    public final TutorRepository tutorRepository;
    @PreAuthorize("hasRole('ROLE_TUTOR')")
    @PostMapping("/register_tutor")
    public ResponseEntity<String> registerTutor(@RequestBody Tutor tutor) {
        tutorRepository.save(tutor);
        return ResponseEntity.ok("Usuario registrado");
    }


}
