$(document).ready(function () {
    alert("Everything is f");

    var nombreUsuario = "SERGIO ULISES ROJAS ALARCON";
    var infante = {
        "NOMCOM": "Juan Pérez Ramirez",
        "EDAD": 30,
        "SEXO": "Masculino",
        "CURP": "PEEJ800909HMNRRN00",
        "VIVE": "Padres",
        "HERMANOS": 2,
        "CUIDADOS": "Ninguno",
        "FAMILIOGRAMA": "Vacio"
    }



    $("#1p").text(infante.NOMCOM);
    $("#2p").text(infante.EDAD);
    $("#3p").text(infante.SEXO);
    $("#4p").text(infante.CURP);
    $("#5p").text(infante.VIVE);
    $("#6p").text(infante.HERMANOS);
    $("#7p").text(infante.CUIDADOS);
    $("#8p").text(infante.FAMILIOGRAMA);
    $("#nombreinfanteprint").text("PERFIL DE " + infante.nombre.toUpperCase());
    $("#nombreusuarioprint").text(nombreUsuario.toUpperCase());


});
