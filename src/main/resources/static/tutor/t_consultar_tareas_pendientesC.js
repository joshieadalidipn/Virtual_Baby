$(document).ready(function(){
    alert("Todo salió bien");
    var niño = "Jorge Cortés Gonzáles"
    $("#nombrehijoprint").text(niño.toUpperCase());
    var tareas = [
        {
            "id": 70001,
            "tarea": "Colorear dibujo.",
            "fechaEntrega": new Date(2022,3,23),
        },
        {
            "id": 70002,
            "tarea": "Tarea rompecabezas.",
            "fechaEntrega": new Date(2022,3,24),
        },
        {
            "id": 70003,
            "tarea": "Tarea figuras geométricas .",
            "fechaEntrega": new Date(2022,3,24),
        },
        {
            "id": 70004,
            "tarea": "Recortado de libro.",
            "fechaEntrega": new Date(2022,3,29),
        },
        {
            "id": 70005,
            "tarea": "Tarea habilidad verbal.",
            "fechaEntrega": new Date(2022,3,30),
        },
    ];
    $.each(tareas,function(key,val){
        var row = $("<tr>");
        var fechaString = val.fechaEntrega.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" });
        $("#tabla_tareas_pendientes").append(row);
        row.append($("<td>").addClass("text-end").html(`<i class="fa-solid fa-pen-to-square"></i>`));
        row.append($("<td>").addClass("text-center").text(val.tarea));
        row.append($("<td>").addClass("text-center").text(fechaString));
        row.append($("<td>").addClass("text-center").html(`<button class="btn btn-dark px-4" type="submit">Revisar</button>`));

    })

});