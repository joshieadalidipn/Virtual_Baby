package com.virtual.virtualbaby.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String nombre;
    private String primer_apellido;
    private String segundo_apellido;
    private String email;
    private String password;
}
