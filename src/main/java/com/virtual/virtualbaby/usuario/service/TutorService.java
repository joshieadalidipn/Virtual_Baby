package com.virtual.virtualbaby.usuario.service;

import com.virtual.virtualbaby.infante.model.Infante;
import com.virtual.virtualbaby.infante.repository.InfanteRepository;
import com.virtual.virtualbaby.reporte.model.ReporteDiario;
import com.virtual.virtualbaby.reporte.repository.ReporteDiarioRepository;
import com.virtual.virtualbaby.usuario.model.Tutor;
import com.virtual.virtualbaby.usuario.repository.TutorRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@Service
public class TutorService {
    private final TutorRepository tutorRepository;

    private final InfanteRepository infanteRepository;

    private final ReporteDiarioRepository reporteDiarioRepository;

    public List<ReporteDiario> getReportesTutorInfante(String email, Long infanteId, LocalDate fecha) throws ForbiddenException {
        // Buscar al usuario en la base de datos
        Tutor founded = tutorRepository.findTutorByUsuarioEmail(email).orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));

        // Buscar el infante en la base de datos
        Infante infante = infanteRepository.findById(infanteId).orElseThrow(() -> new RuntimeException("Infante no encontrado"));

        // Verificar que el usuario es el tutor del infante
        if (!infante.getTutor().equals(founded)) {
            throw new ForbiddenException("El usuario no es tutor del infante");
        }

        // Obtener los reportes del infante
        return reporteDiarioRepository.findAllByInfanteIdAndFecha(infante.getId(), fecha);
    }
}
