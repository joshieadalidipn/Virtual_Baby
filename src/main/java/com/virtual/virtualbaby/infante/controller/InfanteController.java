package com.virtual.virtualbaby.infante.controller;

import com.virtual.virtualbaby.auth.security.JwtService;
import com.virtual.virtualbaby.infante.model.Infante;
import com.virtual.virtualbaby.infante.repository.InfanteRepository;
import com.virtual.virtualbaby.reporte.model.ReporteDiario;
import com.virtual.virtualbaby.reporte.repository.ReporteDiarioRepository;
import com.virtual.virtualbaby.usuario.service.ForbiddenException;
import com.virtual.virtualbaby.usuario.service.TutorService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

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
    private final TutorService tutorService;
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

    @PreAuthorize("hasAuthority('TRABAJADOR_SOCIAL')")
    @PostMapping("/")
    public ResponseEntity<Infante> createInfante(@RequestBody Infante infante) {
        Infante savedInfante = infanteRepository.save(infante);
        return new ResponseEntity<>(savedInfante, HttpStatus.CREATED);
    }


    @GetMapping("/{infanteId}/reportes/{fecha}")
    @PreAuthorize("hasAuthority('TUTOR')")
    public ResponseEntity<List<ReporteDiario>> getReportesDiariosFromAuthorizedTutor(HttpServletRequest request, @PathVariable Long infanteId, @PathVariable LocalDate fecha) throws ForbiddenException {
        String email = jwtService.extractEmail(jwtService.extractJwtFromRequest(request));
        List<ReporteDiario> reportes = tutorService.getReportesTutorInfante(email, infanteId, fecha);
        return ResponseEntity.ok(reportes);
    }


    @GetMapping("/{infanteId}/reportes")
    @PreAuthorize("hasAuthority('TUTOR')")
    public ResponseEntity<List<ReporteDiario>> getReportesDiarios(@PathVariable Long infanteId, @RequestParam LocalDate fecha) {
        List<ReporteDiario> reportes = reporteDiarioRepository.findAllByInfanteIdAndFecha(infanteId, fecha);
        return ResponseEntity.ok(reportes);
    }

    @GetMapping("/reportes/{fecha}")
    @PreAuthorize("hasAuthority('TUTOR')")
    public ResponseEntity<List<ReporteDiario>> getReportesDiarios(@PathVariable LocalDate fecha) {
        List<ReporteDiario> reportes = reporteDiarioRepository.findAllByFecha(fecha);
        return ResponseEntity.ok(reportes);
    }
}

