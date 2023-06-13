package com.virtual.virtualbaby.config;

import com.virtual.virtualbaby.infante.model.Grupo;
import com.virtual.virtualbaby.infante.model.Infante;
import com.virtual.virtualbaby.infante.model.Salon;
import com.virtual.virtualbaby.infante.repository.GrupoRepository;
import com.virtual.virtualbaby.infante.repository.InfanteRepository;
import com.virtual.virtualbaby.infante.repository.SalonRepository;
import com.virtual.virtualbaby.reporte.model.ReporteDiario;
import com.virtual.virtualbaby.reporte.model.SubreporteComida;
import com.virtual.virtualbaby.reporte.repository.ReporteDiarioRepository;
import com.virtual.virtualbaby.reporte.repository.SubreporteComidaRepository;
import com.virtual.virtualbaby.reporte.repository.SubreporteEvacuacionRepository;
import com.virtual.virtualbaby.reporte.repository.SubreporteObservacionesRepository;
import com.virtual.virtualbaby.usuario.model.TrabajadorSocial;
import com.virtual.virtualbaby.usuario.model.Tutor;
import com.virtual.virtualbaby.usuario.model.Usuario;
import com.virtual.virtualbaby.usuario.repository.TrabajadorSocialRepository;
import com.virtual.virtualbaby.usuario.repository.TutorRepository;
import com.virtual.virtualbaby.usuario.repository.UsuarioRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;

@AllArgsConstructor
@Component
public class DatabaseInitializer implements CommandLineRunner {

    // Privilegios usuario
    private final UsuarioRepository usuarioRepository;
    private final TutorRepository tutorRepository;
    private final InfanteRepository infanteRepository;
    private final TrabajadorSocialRepository trabajadorSocialRepository;
    private final SalonRepository salonRepository;
    private final GrupoRepository grupoRepository;
    private final PasswordEncoder passwordEncoder;
    private final ReporteDiarioRepository reporteDiarioRepository;
    private final SubreporteComidaRepository subreporteComidaRepository;
    private final SubreporteEvacuacionRepository subreporteEvacuacionRepository;
    private final SubreporteObservacionesRepository subreporteObservacionesRepository;

    @Override
    public void run(String... args) throws Exception {
        Salon salon1 = Salon.builder().nombre("Salon 1").build();
        Salon salon2 = Salon.builder().nombre("Salon 2").build();
        Salon salon3 = Salon.builder().nombre("Salon 3").build();

        salon1 = salonRepository.save(salon1);
        salon2 = salonRepository.save(salon2);
        salon3 = salonRepository.save(salon3);

        Grupo grupo1 = Grupo.builder().salon(salon1).nombre("Grupo 1").build();
        Grupo grupo2 = Grupo.builder().salon(salon2).nombre("Grupo 2").build();
        Grupo grupo3 = Grupo.builder().salon(salon3).nombre("Grupo 3").build();
        Grupo grupo4 = Grupo.builder().salon(salon3).nombre("Grupo 4").build();


        grupo1 = grupoRepository.save(grupo1);
        grupo2 = grupoRepository.save(grupo2);
        grupoRepository.save(grupo3);
        grupoRepository.save(grupo4);


        Usuario usuario1 = Usuario.builder().nombre("Josué Adalid").primerApellido("Juárez").segundoApellido("Botello").email("josueadalidjb@gmail.com").password(passwordEncoder.encode("Joshie9750.")).build();
        Usuario usuario2 = Usuario.builder().nombre("Eidan Owen").primerApellido("Plata").segundoApellido("Salinas").email("eidan.plasa@gmail.com").password(passwordEncoder.encode("Joshie9750.")).build();
        Usuario usuario3 = Usuario.builder().nombre("Rodrigo").primerApellido("Trejo").segundoApellido("Arriaga").email("rodrigo.gerardo.trejo.arriaga@gmail.com").password(passwordEncoder.encode("Rodrigo")).build();
        Usuario usuario4 = Usuario.builder().nombre("Ángel").primerApellido("Hernández").segundoApellido("Hernández").email("angelhh@gmail.com").password(passwordEncoder.encode("Angel.")).build();


        usuarioRepository.save(usuario1);
        usuarioRepository.save(usuario2);
        usuarioRepository.save(usuario3);
        usuarioRepository.save(usuario4);
        trabajadorSocialRepository.save(TrabajadorSocial.builder().usuario(usuario1).build());
        Tutor tutor1 = tutorRepository.save(Tutor.builder().usuario(usuario1).build());

        Infante infante1 = Infante.builder().nombre("Juan").primerApellido("Pérez").segundoApellido("Sánchez").grupo(grupo1).tutor(tutor1).build();
        Infante infante2 = Infante.builder().nombre("Juana").primerApellido("Pérez").segundoApellido("Sánchez").grupo(grupo2).tutor(tutor1).build();

        infanteRepository.save(infante1);
        infanteRepository.save(infante2);

        ReporteDiario reporteDiario1 = ReporteDiario.builder().infante(infante1).fecha(LocalDate.now()).horaEntrada(LocalTime.MIN).horaSalida(LocalTime.MIDNIGHT).build();
        ReporteDiario reporteDiario2 = ReporteDiario.builder().infante(infante1).fecha(LocalDate.now()).horaEntrada(LocalTime.MIN).horaSalida(LocalTime.MIDNIGHT).build();
        reporteDiarioRepository.save(reporteDiario1);
        reporteDiarioRepository.save(reporteDiario2);

        SubreporteComida subreporteComida1 = SubreporteComida.builder().comida("Deliciosa").cantidad(3).reporteDiario(reporteDiario1).build();
        subreporteComidaRepository.save(subreporteComida1);
    }

}

