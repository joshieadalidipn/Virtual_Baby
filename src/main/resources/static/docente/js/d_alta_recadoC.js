$(document).ready(function(){
    alert('Página creado');
    
    var ejemploRecado = {
        "id_aviso":50001,
        "nombreNiño":"Juan Lopez Lopez",
        "nombre:tutor":"Mario Lopez Garcia",
        "descripcionRecado": "Estimado padre de familia, se le informa que el comportamiento de su hijo con sus demás compañeros no ha sido el adecuado.",
    }
    //Obteniendo la fecha actual 
    var fechaActual = new Date();
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1; // Los meses se indexan desde 0
    var año = fechaActual.getFullYear();
    var fechaFormateada = dia + '/' + mes + '/' + año;

    $("#nombre-tutor-print").text("Para: "+ ejemploRecado["nombre:tutor"]);
    $("#nombre-alumno-print").text("Tutor de: "+ ejemploRecado.nombreNiño);
    $("#fecha-recado").text(fechaFormateada);
})