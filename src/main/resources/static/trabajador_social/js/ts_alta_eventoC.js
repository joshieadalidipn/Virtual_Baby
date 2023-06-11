$(document).ready(function () {
    alert("Everything is f");

    var nombreUsuario = "SERGIO ULISES ROJAS ALARCON";

    var fechaHoy = new Date().toISOString().split("T")[0];


    $("#fechaf").val(fechaHoy);
    $("#nombreusuarioprint").text(nombreUsuario.toUpperCase());


});
