$(document).ready(function(){
    var nombreUsuario = "Gonzalo Sánchez Vélez";
    $("#nombreusuarioprint").text(nombreUsuario.toUpperCase());
    
    var tarea = {
        "id":70001,
        "nombreTarea":"Colorear dibujo",
        "grupo":"Maternal 2",
        "fechaEntrega": new Date(2022,3,28),
        "intruccines": " Colorear el dibujo pegado en el cuaderno de artes y manualidades de acuerdo a los colores que se le indican. No olvidar fimar la tarea"
    };
    var fechaString = tarea.fechaEntrega.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" });
    $("#nombre_tarea").text(tarea.nombreTarea);
    $("#instrucciones_tarea").text(tarea.intruccines);
    $("#fecha_entrega").text(fechaString);
});