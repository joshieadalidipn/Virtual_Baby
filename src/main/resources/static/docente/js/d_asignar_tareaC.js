$(document).ready(function(){
    alert('Todo salió bien');
    var grupos = [
        {
            "id_grupo": 20001,
            "nombre": "maternalA",
        },
        {
            "id_grupo": 20002,
            "nombre": "maternalB",
        },
        {
            "id_grupo": 20003,
            "nombre": "maternalC",
        },
        {
            "id_grupo": 20004,
            "nombre": "maternalD",
        },
    ]
    var fechaActual = new Date();
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1; // Los meses se indexan desde 0
    var año = fechaActual.getFullYear();
    var fechaFormateada = dia + '/' + mes + '/' + año;
    //Obteniendo una referencia a la etiqueta select para la seleccion de un grupo 
    var selectGrupo = document.getElementById("grupo-asignar");
    for(var i=0; i<grupos.length; i++){
        var optionElement = document.createElement("option");
        optionElement.value=i;
        optionElement.textContent=grupos[i].nombre;
        selectGrupo.appendChild(optionElement);
    }
    $("#fecha-actual").text(fechaFormateada);


});