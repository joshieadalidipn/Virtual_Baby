$(document).ready(()=>{
    var opcionUsuario='';
    alert('La página se cagó correctamente');

    alumnos = [
    {
        "id_alumno": 50010,
        "primer_apellido": "Hernandez",
        "segundo_apellido": "Galdeano",
        "nombres_infante": "Patricio",
        "grupo": "maternal A",
        "asistente": "presente",
        "hora_entrada": "09:00",
        "hora_salida": "16:00"
    },
    {
        "id_alumno": 50011,
        "primer_apellido": "Gonzalez",
        "segundo_apellido": "Lopez",
        "nombres_infante": "Camila",
        "grupo": "maternal B",
        "asistente": "presente",
        "hora_entrada": "08:30",
        "hora_salida": "15:30"
    },
    {
        "id_alumno": 50012,
        "primer_apellido": "Martinez",
        "segundo_apellido": "Ramirez",
        "nombres_infante": "Sebastian",
        "grupo": "maternal C",
        "asistente": "ausente",
        "hora_entrada": "10:00",
        "hora_salida": "17:00"
    },
    {
        "id_alumno": 50013,
        "primer_apellido": "Rodriguez",
        "segundo_apellido": "Vargas",
        "nombres_infante": "Valentina",
        "grupo": "maternal D",
        "asistente": "ausente",
        "hora_entrada": "09:30",
        "hora_salida": "16:30"
    },
    {
        "id_alumno": 50014,
        "primer_apellido": "Lopez",
        "segundo_apellido": "Fernandez",
        "nombres_infante": "Mateo",
        "grupo": "maternal A",
        "asistente": "presente",
        "hora_entrada": "08:00",
        "hora_salida": "15:00"
    },
    {
        "id_alumno": 50015,
        "primer_apellido": "Garcia",
        "segundo_apellido": "Hernandez",
        "nombres_infante": "Lucia",
        "grupo": "maternal B",
        "asistente": "ausente",
        "hora_entrada": "10:30",
        "hora_salida": "17:30"
    },
    {
        "id_alumno": 50016,
        "primer_apellido": "Perez",
        "segundo_apellido": "Gonzalez",
        "nombres_infante": "Benjamin",
        "grupo": "maternal C",
        "asistente": "ausente",
        "hora_entrada": "09:15",
        "hora_salida": "16:15"
    },
    {
        "id_alumno": 50017,
        "primer_apellido": "Sanchez",
        "segundo_apellido": "Rodriguez",
        "nombres_infante": "Emma",
        "grupo": "maternal D",
        "asistente": "presente",
        "hora_entrada": "08:45",
        "hora_salida": "15:45"
    },
    {
        "id_alumno": 50018,
        "primer_apellido": "Flores",
        "segundo_apellido": "Sanchez",
        "nombres_infante": "Santiago",
        "grupo": "maternal A",
        "asistente": "presente",
        "hora_entrada": "09:30",
        "hora_salida": "16:30"
    },
    {
        "id_alumno": 50019,
        "primer_apellido": "Romero",
        "segundo_apellido": "Flores",
        "nombres_infante": "Isabella",
        "grupo": "maternal B",
        "asistente": "ausente",
        "hora_entrada": "10:15",
        "hora_salida": "17:15"
    },
    {
        "id_alumno": 50020,
        "primer_apellido": "Ramirez",
        "segundo_apellido": "Romero",
        "nombres_infante": "Liam",
        "grupo": "maternal C",
        "asistente": "presente",
        "hora_entrada": "08:30",
        "hora_salida": "15:30"
    },
    {
        "id_alumno": 50021,
        "primer_apellido": "Gomez",
        "segundo_apellido": "Vargas",
        "nombres_infante": "Mia",
        "grupo": "maternal D",
        "asistente": "ausente",
        "hora_entrada": "09:45",
        "hora_salida": "16:45"
    },
    {
        "id_alumno": 50022,
        "primer_apellido": "Jimenez",
        "segundo_apellido": "Gomez",
        "nombres_infante": "Daniel",
        "grupo": "maternal A",
        "asistente": "ausente",
        "hora_entrada": "10:30",
        "hora_salida": "17:30"
    },
    {
        "id_alumno": 50023,
        "primer_apellido": "Hernandez",
        "segundo_apellido": "Jimenez",
        "nombres_infante": "Valeria",
        "grupo": "maternal B",
        "asistente": "presente",
        "hora_entrada": "09:00",
        "hora_salida": "16:00"
    },
    {
        "id_alumno": 50024,
        "primer_apellido": "Lopez",
        "segundo_apellido": "Hernandez",
        "nombres_infante": "Alexander",
        "grupo": "maternal C",
        "asistente": "ausente",
        "hora_entrada": "09:45",
        "hora_salida": "16:45"
    },
    {
        "id_alumno": 50025,
        "primer_apellido": "Gonzalez",
        "segundo_apellido": "Lopez",
        "nombres_infante": "Sofia",
        "grupo": "maternal D",
        "asistente": "presente",
        "hora_entrada": "08:15",
        "hora_salida": "15:15"
    }
    ];

    //Declarando una variable para guardar el valor seleccionado por el usuario 
    
    
    $('#grupo-asignar').change(function() {
    var opcionSeleccionada = $(this).val();
    opcionUsuario = $(this).val();
    var textoNuevo = '';

    switch (opcionSeleccionada) {
        case 'maternal A':
        textoNuevo = 'Maternal A';
        generarRegistros(opcionSeleccionada);
        break;
        case 'maternal B':
        textoNuevo = 'Maternal B';
        generarRegistros(opcionSeleccionada);
        break;
        case 'maternal C':
        textoNuevo = 'Maternal C';
        generarRegistros(opcionSeleccionada);
        break;
        case 'maternal D':
        textoNuevo = 'Maternal D';
        generarRegistros(opcionSeleccionada);
        break;
        default:
        textoNuevo = 'No se ha seleccionado ningun grupo';
        break;
    }

    $('#titulo-registro-asistencia').text('Registro de asistencia: '+textoNuevo);
    });

    // Función para marcar la asistencia y escribir la hora actual en el <th> correspondiente

   //Funcion para generar los elementos de la tabla según el valor de su tabla
function generarRegistros(opcion){
    $("#tabla-infantes-salidas tbody").empty();
    $.each(alumnos, function(key,val){
        if(val.grupo == opcionUsuario && val.asistente == "presente"){
            var row = $("<tr>");
            $("#tabla-infantes-salidas tbody").append(row);
            row.append($("<td>").addClass("text-center").text(val.nombres_infante + " " + val.primer_apellido + " " + val.segundo_apellido));
            row.append($("<td>").addClass("text-center").text(val.hora_entrada));
            row.append($("<td>").addClass("text-center").text(val.hora_salida));
        } else if(val.grupo == opcionUsuario && val.asistente == "ausente"){
            var row = $("<tr>");
            $("#tabla-infantes-salidas tbody").append(row);
            row.append($("<td>").addClass("text-center").text(val.nombres_infante + " " + val.primer_apellido + " " + val.segundo_apellido));
            row.append($("<td>").addClass("text-center").text("Este alumno no asistió"));
            row.append($("<td>").addClass("text-center").text("Este alumno no asistió"));
        } else {
            console.log('No se encontró coincidencia con el id');
        }
    });
};

// Asociar el evento click a los botones de casilla
$(document).on("click", ".casilla-asistencia", marcarAsistencia);


})