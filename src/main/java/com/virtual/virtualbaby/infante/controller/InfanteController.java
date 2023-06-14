package com.virtual.virtualbaby.infante.controller;

import com.virtual.virtualbaby.auth.security.JwtService;
import com.virtual.virtualbaby.infante.model.Infante;
import com.virtual.virtualbaby.infante.repository.InfanteRepository;
import com.virtual.virtualbaby.reporte.model.ReporteDiario;
import com.virtual.virtualbaby.reporte.repository.ReporteDiarioRepository;
import com.virtual.virtualbaby.usuario.model.Tutor;
import com.virtual.virtualbaby.usuario.repository.TutorRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/infantes")
@AllArgsConstructor
public class InfanteController {
    private final InfanteRepository infanteRepository;
    private final ReporteDiarioRepository reporteDiarioRepository;
    private final JwtService jwtService;
    private final TutorRepository tutorRepository;

    @PreAuthorize("hasAnyAuthority('DOCENTE','TRABAJADOR_SOCIAL')")
    @GetMapping("/{id}")
    public ResponseEntity<Infante> getInfanteById(@PathVariable Long id) {
        Optional<Infante> optionalInfante = infanteRepository.findById(id);
        return optionalInfante.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PreAuthorize("hasAnyAuthority('DOCENTE')")
    @GetMapping("/")
    public ResponseEntity<List<Infante>> getAllInfantes() {
        List<Infante> infantes = infanteRepository.findAll();
        return ResponseEntity.ok(infantes);
    }

    @GetMapping("/{infanteId}/reportes/{fecha}")
    @PreAuthorize("hasAuthority('TUTOR')")
    public ResponseEntity<List<ReporteDiario>> getReportesDelInfante(HttpServletRequest request, @PathVariable Long infanteId, @PathVariable LocalDate fecha) {
        String jwt = jwtService.extractJwtFromRequest(request);
        String email = jwtService.extractEmail(jwt);

        // Buscar al usuario en la base de datos
        Optional<Tutor> tutorDatabase = tutorRepository.findTutorByUsuarioEmail(email);
        // Si el usuario no se encontró, lanzar una excepción
        Tutor founded = tutorDatabase.orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));

        // Buscar el infante en la base de datos
        Optional<Infante> infanteOpt = infanteRepository.findById(infanteId);
        Infante infante = infanteOpt.orElseThrow(() -> new RuntimeException("Infante no encontrado"));

        // Verificar que el usuario es el tutor del infante
        if (!infante.getTutor().equals(founded)) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        // Obtener los reportes del infante
        List<ReporteDiario> reportes = reporteDiarioRepository.findAllByInfanteAndFecha(infante, fecha);

        return ResponseEntity.ok(reportes);
    }
}

