$(document).ready(function() {
    alert('Everything is fine');
  
    var nombreUsuario = "JORGE ALBERTO GONZALES PEREZ";
    $("#nombreusuarioprint").text(nombreUsuario.toUpperCase());
  
    var nombreHijo = "MARIA FERNANDEZ GARCIA";
    $("#nombreHijoprint").text(nombreHijo.toUpperCase());
  
    var registro = [
      {
        "descripcion": "Actividad de habilidad motriz",
        "fecha": new Date(2022, 3, 23),
        "calificacion": 3,
        "horaRealizacion": new Date(0, 0, 0, 8, 30, 0),
      },
      {
        "descripcion": "Manejo de articulos escolares",
        "fecha": new Date(2022, 3, 23),
        "calificacion": 2,
        "horaRealizacion": new Date(0, 0, 0, 9, 0, 0),
      },
      {
        "descripcion": "Desempeño social con juegos de mesa",
        "fecha": new Date(2022, 3, 23),
        "calificacion": 4,
        "horaRealizacion": new Date(0, 0, 0, 9, 30, 0),
      },
      {
        "descripcion": "Cuidado del aseo personal",
        "fecha": new Date(2022, 3, 23),
        "calificacion": 1,
        "horaRealizacion": new Date(0, 0, 0, 10, 0, 0),
      },
      {
        "descripcion": "Deportes I",
        "fecha": new Date(2022, 3, 23),
        "calificacion": 5,
        "horaRealizacion": new Date(0, 0, 0, 10, 30, 0),
      },
    ];

    //Ordenando el arreglo con base en su atributo fechaRealizacin 
    registro.sort(function(a, b) {
        return a.horaRealizacion - b.horaRealizacion;
      });
  
    // Generando las etiquetas en el HTML
    $.each(registro, function(key, val) {
      var row = $("<tr>");
      var fechaString = val.fecha.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" });
      var hora = val.horaRealizacion.getHours();
      var minuto = val.horaRealizacion.getMinutes();
      var segundo = val.horaRealizacion.getSeconds();
      var horaFormateada = ('0' + hora).slice(-2) + ':' + ('0' + minuto).slice(-2) + ':' + ('0' + segundo).slice(-2);
      $("#tabla-de-calificaciones tbody").append(row);
      row.append($("<td>").addClass("text-center").text(val.descripcion));
      row.append($("<td>").addClass("text-center").text(fechaString));
      row.append($("<td>").addClass("text-center").text(horaFormateada));
      // row.append($("<td>").addClass("text-center").text(val.calificacion));
  
      // Imprimiendo los íconos de Font Awesome
      var iconos = ""; // Variable auxiliar para almacenar los íconos
      for (var i = 1; i <= val.calificacion; i++) {
        iconos += '<i class="fas fa-solid fa-star"></i>'; // Concatenar el ícono en la variable
      }
      row.append($("<td>").addClass("text-center").html(iconos));
    });
  });
  