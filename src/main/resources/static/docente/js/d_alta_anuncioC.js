$(document).ready(function () {
    alert("Everything is f");

    var nombreUsuario = "SERGIO ULISES ROJAS ALARCON";
    var fechaHoy = new Date(); // Obtener fecha actual
    var fechaTexto = fechaHoy.toLocaleDateString(); // Convertir fecha a texto legible


    $("#fechaf").val(fechaTexto);
    $("#nombreusuarioprint").text(nombreUsuario.toUpperCase());


});
