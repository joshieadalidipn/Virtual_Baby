$(document).ready(()=>{
    var nombreTutor='JOSE ANTONIO ORTIZ TORRES';
    var tutores = [
        {
            "id_usuario":60001,
            "nombre_usario":"Jorge",
            "primer_apellido": "Hernández",
            "segundo_apellido":"Juárez"
        },
        {
            "id_usuario":60002,
            "nombre_usario":"Maria",
            "primer_apellido": "Sánchez",
            "segundo_apellido":"Arias"
        },
        {
            "id_usuario": 60003,
            "nombre_usario": "Carlos",
            "primer_apellido": "López",
            "segundo_apellido": "García"
        },
        {
        "id_usuario": 60004,
        "nombre_usario": "Ana",
        "primer_apellido": "Martínez",
        "segundo_apellido": "Rodríguez"
        },
        {
        "id_usuario": 60005,
        "nombre_usario": "Pedro",
        "primer_apellido": "Gómez",
        "segundo_apellido": "Vargas"
        },
        {
        "id_usuario": 60006,
        "nombre_usario": "Laura",
        "primer_apellido": "Torres",
        "segundo_apellido": "Rojas"
        },
        {
        "id_usuario": 60007,
        "nombre_usario": "Manuel",
        "primer_apellido": "Díaz",
        "segundo_apellido": "Mendoza"
        },
        {
        "id_usuario": 60008,
        "nombre_usario": "Isabel",
        "primer_apellido": "Pérez",
        "segundo_apellido": "López"
        },
        {
        "id_usuario": 60009,
        "nombre_usario": "Eduardo",
        "primer_apellido": "Ramírez",
        "segundo_apellido": "Jiménez"
        },
        {
        "id_usuario": 60010,
        "nombre_usario": "Gabriela",
        "primer_apellido": "Herrera",
        "segundo_apellido": "Soto"
        }
    ]

    var alumnos = [
        {
            "id_infante":5001,
            "nombre_infante": "Emilio",
            "primer_apellido": "Arias",
            "segundo_apellido": "Torres",
            "id_tutor":6001,
        },
        {
            "id_infante": 5002,
            "nombre_infante": "Sofía",
            "primer_apellido": "González",
            "segundo_apellido": "López",
            "id_tutor": 6002
        },
        {
        "id_infante": 5003,
        "nombre_infante": "Mateo",
        "primer_apellido": "Martínez",
        "segundo_apellido": "García",
        "id_tutor": 6003
        },
        {
        "id_infante": 5004,
        "nombre_infante": "Valentina",
        "primer_apellido": "Pérez",
        "segundo_apellido": "Hernández",
        "id_tutor": 6004
        },
        {
        "id_infante": 5005,
        "nombre_infante": "Benjamín",
        "primer_apellido": "Rodríguez",
        "segundo_apellido": "Sánchez",
        "id_tutor": 6005
        },
        {
        "id_infante": 5006,
        "nombre_infante": "Isabella",
        "primer_apellido": "Luna",
        "segundo_apellido": "Ramírez",
        "id_tutor": 6006
        },
        {
        "id_infante": 5007,
        "nombre_infante": "Sebastián",
        "primer_apellido": "Díaz",
        "segundo_apellido": "Vargas",
        "id_tutor": 6007
        },
        {
        "id_infante": 5008,
        "nombre_infante": "Mariana",
        "primer_apellido": "Flores",
        "segundo_apellido": "Gómez",
        "id_tutor": 6008
        },
        {
        "id_infante": 5009,
        "nombre_infante": "Daniel",
        "primer_apellido": "Herrera",
        "segundo_apellido": "Jiménez",
        "id_tutor": 6009
        },
        {
        "id_infante": 5010,
        "nombre_infante": "Camila",
        "primer_apellido": "Mendoza",
        "segundo_apellido": "López",
        "id_tutor": 6010
        }
    ]
    $("#nombreusuarioprint").text(nombreTutor);
    $.each(tutores,function(key,val){
        var alumno = alumnos[key]
        var row = $("<tr>");
        var boton = $("<button>").addClass("btn btn-dark px-4").text("Escribir recado");
        $("#tabla-tutores-infantes tbody").append(row);
        row.append($("<td>").addClass("text-center").text(val.nombre_usario +" "+ val.primer_apellido +" "+ val.segundo_apellido));
        row.append($("<td>").addClass("text-center").text(alumno.nombre_infante +" "+ alumno.primer_apellido +" "+ alumno.segundo_apellido));
        row.append($("<td>").addClass("text-center").html(`<button class="btn btn-dark px-4" type="button">Redactar recado</button>`));
    })    
})