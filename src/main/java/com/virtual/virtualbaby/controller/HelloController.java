package com.virtual.virtualbaby.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class HelloController {
    @PreAuthorize("hasAuthority('ROLE_USUARIO')")
    @GetMapping("/usuario")
    public ResponseEntity<String> hello_usuario(){
        return ResponseEntity.ok("Hola Usuario");
    }
    @PreAuthorize("hasAuthority('ROLE_TUTOR')")
    @GetMapping("/tutor")
    public ResponseEntity<String> hello_tutor(){
        return ResponseEntity.ok("Hola Tutor");
    }
}
