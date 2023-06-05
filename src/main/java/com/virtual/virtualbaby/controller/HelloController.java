package com.virtual.virtualbaby.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class HelloController {
    @PreAuthorize("hasRole('USUARIO')")
    @GetMapping("/usuario")
    public ResponseEntity<String> helloUsuario(){
        return ResponseEntity.ok("Hola Usuario");
    }
    @PreAuthorize("hasRole('TUTOR')")
    @GetMapping("/tutor")
    public ResponseEntity<String> helloTutor(){
        return ResponseEntity.ok("Hola Tutor");
    }
    @PreAuthorize("hasRole('DOCENTE')")
    @GetMapping("/docente")
    public ResponseEntity<String> helloDocente(){
        return ResponseEntity.ok("Hola Docente");
    }
    @PreAuthorize("hasRole('MEDICO')")
    @GetMapping("/medico")
    public ResponseEntity<String> helloMedico(){
        return ResponseEntity.ok("Hola Médico");
    }
    @PreAuthorize("hasRole('CAPITAL_HUMANO')")
    @GetMapping("/capitalHumano")
    public ResponseEntity<String> helloCapitalHumano(){
        return ResponseEntity.ok("Hola personal de Capital Humano");
    }
    @PreAuthorize("hasRole('TRABAJADOR_SOCIAL')")
    @GetMapping("/trabajadorSocial")
    public ResponseEntity<String> helloTrabajadorSocial(){
        return ResponseEntity.ok("Hola Trabajador Social");
    }
    @PreAuthorize("hasRole('DIRECTORA')")
    @GetMapping("/directora")
    public ResponseEntity<String> helloDirectora(){
        return ResponseEntity.ok("Hola Directora");
    }

}
