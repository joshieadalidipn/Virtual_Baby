package com.virtual.virtualbaby.home;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/")
    public String home() {
        return "redirect:/general/g_login.html";
    }

    @GetMapping("/capital_humano")
    public String capitalHumanoHome() {
        return "redirect:/capital_humano/ch_home.html";
    }

    @GetMapping("/docente")
    public String docenteHome() {
        return "redirect:/docente/d_home.html";
    }

    @GetMapping("/medico")
    public String medicoHome() {
        return "redirect:/medico/m_home.html";
    }

    @GetMapping("/trabajador_social")
    public String trabajadorSocialHome() {
        return "redirect:/trabajador_social/t_home.html";
    }

    @GetMapping("/tutor")
    public String tutorHome() {
        return "redirect:/tutor/t_home.html";
    }
}
