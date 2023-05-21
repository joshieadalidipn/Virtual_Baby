package com.virtual.virtualbaby.auth;

import com.virtual.virtualbaby.user.Usuario;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    @PostMapping("/register_user")
    public ResponseEntity<String> registerUser(
            @RequestBody Usuario usuario){
        logger.info("Se recibió una petición en /registerUser: " + usuario);
        return ResponseEntity.ok(authenticationService.register(usuario));
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(
            @RequestBody Usuario usuario){
        logger.info("Se recibió una petición en /login: " + usuario);
        return ResponseEntity.ok(authenticationService.login(usuario));
    }

}
