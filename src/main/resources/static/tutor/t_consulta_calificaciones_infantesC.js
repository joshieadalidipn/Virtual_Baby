//Verificando que todo el arbol de html se haya cargado correctamente
$(document).ready(function(){
    alert('Everything is fine');

    var nombreUsuario = "JORGE ALBERTO GONZALES PEREZ";
    $("#nombreusuarioprint").text(nombreUsuario.toUpperCase());

    var nombreHijo = "MARIA FERNANDEZ GARCIA";
    $("#nombreHijoprint").text(nombreHijo.toUpperCase());

    var registro = [
        {
            "descripcion": "Actividad de habilidad motriz",
            "fecha": new Date(2022,3,23),
            "calificacion": 3,
        },
        {
            "descripcion": "Manejo de articulos escolares",
            "fecha": new Date(2022,3,23),
            "calificacion": 2,
        },
        {
            "descripcion": "Desempeño social con juegos de mesa",
            "fecha": new Date(2022,4,5),
            "calificacion": 4,
        },
        {
            "descripcion": "Cuidado del aseo personal",
            "fecha": new Date(2022,4,5),
            "calificacion": 1,
        },
        {
            "descripcion": "Deportes I",
            "fecha": new Date(2022,4,5),
            "calificacion": 5,
        },

    ];

//Generando las etiquetas en el HTML 
$.each(registro, function(key,val){
    var row = $("<tr>");
    var fechaString = val.fecha.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" });
    $("#tabla-de-calificaciones tbody").append(row);
    row.append($("<td>").addClass("text-center").text(val.descripcion));
    row.append($("<td>").addClass("text-center").text(fechaString));
    row.append($("<td>").addClass("text-center").text(val.calificacion));
    //Imprimiendo los íconos de font awesome 
    var iconos = ""; // Variable auxiliar para almacenar los íconos
    for (var i = 1; i <= val.calificacion; i++) {
    iconos += '<i class="fas fa-solid fa-star"></i>'; // Concatenar el ícono en la variable
    }
    row.append($("<td>").addClass("text-center").html(iconos));
})

})