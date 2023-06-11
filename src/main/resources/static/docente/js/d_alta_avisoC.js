$(document).ready(function () {
    alert("Everything is f");

    var nombreUsuario = "SERGIO ULISES ROJAS ALARCON";
    var infante = {
        "ID": "2019090756",
        "NOMBRE": "Melanie",
        "EDAD": 30,
        "SEXO": "Masculino",
        "CURP": "PEEJ800909HMNRRN00",
        "VIVE": "Padres",
        "HERMANOS": 2,
        "CUIDADOS": "Ninguno",
        "FAMILIOGRAMA": "Vacio"
    }

    var fechaHoy = new Date(); // Obtener fecha actual
    var fechaTexto = fechaHoy.toLocaleDateString(); // Convertir fecha a texto legible


    $("#fechaf").val(fechaTexto);
    $("#nombreinfanteprint").text("AVISO PARA TUTOR DE " + infante.NOMBRE.toUpperCase());
    $("#nombreusuarioprint").text(nombreUsuario.toUpperCase());


});
