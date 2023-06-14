package com.virtual.virtualbaby.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcResourcesConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Este manejador sigue manejando todas las URL que comienzan con /pages/
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/static/");

        // Este manejador maneja específicamente la URL /favicon.ico
        registry.addResourceHandler("/favicon.ico")
                .addResourceLocations("classpath:/static/favicon.ico");
    }
}

