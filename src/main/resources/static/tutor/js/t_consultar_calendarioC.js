$(document).ready(() => {
    alert('Página creada correctamente');
    var nombreUsuario = 'JORGE ALBERTO GONZALES PEREZ';
    $("#nombreusuarioprint").text(nombreUsuario);
    
    var recados = [
        {
            "id_evento":90001,
            "titulo":"Alerta de conducta inapropiada",
            "id_usuario_aviso":60001,
            "fecha":new Date(2023,4,12),
            "descripcion":"Estimado padre de familia, es de suma importancia que platique con su hijo respecto a la violencia, ya que su comportamiento con sus compañeros y profesores no es el adecuado",
        },
        {
            "id_evento": 90002,
            "titulo": "Reunión de padres",
            "id_usuario_aviso": 60002,
            "fecha": new Date(2023, 6, 5),
            "descripcion": "Queridos padres de familia, les invitamos a una reunión el próximo jueves para discutir temas importantes sobre el desarrollo de sus hijos en la guardería."
        },
        {
            "id_evento": 90003,
            "titulo": "Informe de progreso",
            "id_usuario_aviso": 60003,
            "fecha": new Date(2023, 8, 18),
            "descripcion": "Estimados padres, les enviamos un informe de progreso detallado sobre el desempeño académico y social de sus hijos durante este trimestre. Por favor, tómense un tiempo para revisarlo y discutirlo con ellos."
        },
        // Agrega aquí los otros 7 objetos de recados
        {
            "id_evento": 90004,
            "titulo": "Evento de día de campo",
            "id_usuario_aviso": 60004,
            "fecha": new Date(2023, 5, 8),
            "descripcion": "Queridos padres, nos complace invitarlos a nuestro evento anual de día de campo en el parque local. Será una oportunidad para disfrutar de actividades al aire libre y fortalecer los lazos familiares."
        },
        {
            "id_evento": 90005,
            "titulo": "Fiesta de fin de año",
            "id_usuario_aviso": 60005,
            "fecha": new Date(2023, 11, 20),
            "descripcion": "Estimados padres, estamos emocionados de anunciar nuestra fiesta de fin de año en la guardería. Será un momento especial para celebrar los logros de sus hijos y despedirnos del año escolar."
        },
        {
            "id_evento": 90006,
            "titulo": "Cambio de horario",
            "id_usuario_aviso": 60006,
            "fecha": new Date(2023, 9, 10),
            "descripcion": "Queridos padres, les informamos que a partir del próximo mes habrá un cambio en el horario de atención de la guardería. Por favor, consulten los detalles adjuntos."
        },
        {
            "id_evento": 90007,
            "titulo": "Requisitos de uniforme",
            "id_usuario_aviso": 60007,
            "fecha": new Date(2023, 7, 3),
            "descripcion": "Estimados padres, les recordamos que todos los estudiantes deben cumplir con los requisitos de uniforme establecidos. Por favor, asegúrense de que sus hijos vengan correctamente uniformados a la guardería."
        },
        {
            "id_evento": 90008,
            "titulo": "Día de la madre",
            "id_usuario_aviso": 60008,
            "fecha": new Date(2023, 4, 10),
            "descripcion": "Queridas madres, les deseamos un feliz día de la madre. Agradecemos su amor y dedicación hacia sus hijos y les enviamos nuestros mejores deseos en esta ocasión especial."
        },
        {
            "id_evento": 90009,
            "titulo": "Excursión al zoológico",
            "id_usuario_aviso": 60009,
            "fecha": new Date(2023, 6, 25),
            "descripcion": "Estimados padres, estamos emocionados de anunciar nuestra próxima excursión al zoológico. Será una oportunidad para que sus hijos aprendan sobre diferentes especies de animales y disfruten de un día divertido."
        },
        {
            "id_evento": 90010,
            "titulo": "Solicitud de información actualizada",
            "id_usuario_aviso": 60010,
            "fecha": new Date(2023, 10, 5),
            "descripcion": "Estimados padres, solicitamos su colaboración para proporcionarnos información actualizada sobre contactos de emergencia y cualquier cambio relevante en la información personal de sus hijos. Esto nos ayudará a mantener nuestros registros actualizados y garantizar la seguridad de todos los estudiantes."
        }
    ];

     // Ordenar los recados por la propiedad "fecha"
    recados.sort((a, b) => a.fecha - b.fecha);
    
    var container = document.getElementById('cuerpo_bg');
    
    for (var i = 0; i < recados.length; i++) {
        var recado = recados[i];
    
        // Crear contenedor del recado
        var recadoContainer = document.createElement('div');
        recadoContainer.classList.add('recado-container');
    
        // Crear sección de fecha
        var fechaSection = document.createElement('div');
        fechaSection.classList.add('fecha-section');
        fechaSection.textContent = obtenerFechaFormateada(recado.fecha);
    
        // Crear sección de título
        var tituloSection = document.createElement('div');
        tituloSection.classList.add('titulo-section');
        tituloSection.innerHTML = '<strong>' + recado.titulo + '</strong>';
    
        // Crear sección de descripción
        var descripcionSection = document.createElement('div');
        descripcionSection.classList.add('descripcion-section');
        descripcionSection.textContent = recado.descripcion;
    
        // Agregar secciones al contenedor del recado
        recadoContainer.appendChild(fechaSection);
        recadoContainer.appendChild(tituloSection);
        recadoContainer.appendChild(descripcionSection);
    
        // Crear sección de botón "Revisar detalles"
        var botonSection = document.createElement('div');
        botonSection.classList.add('boton-section');
    
        // Crear elemento de botón
        var boton = document.createElement('button');
        boton.textContent = 'Revisar detalles';
        boton.classList.add('boton-revisar-detalles');
    
        // Agregar el botón a la sección de botón
        botonSection.appendChild(boton);
    
        // Agregar la sección de botón al contenedor del recado
        recadoContainer.appendChild(botonSection);
    
        // Calcular la posición en la cuadrícula
        var col = i % 3;
    
        // Crear una nueva fila si es el comienzo de una nueva fila
        if (col === 0) {
        var rowContainer = document.createElement('div');
        rowContainer.classList.add('row');
        container.appendChild(rowContainer);
        }
    
        // Obtener la fila actual
        var currentRow = container.lastElementChild;
    
        // Agregar el contenedor del recado a la fila actual
        var colContainer = document.createElement('div');
        colContainer.classList.add('col');
        colContainer.appendChild(recadoContainer);
        currentRow.appendChild(colContainer);
    
        // Agregar <br> entre cada fila, excepto la última
        if (i !== recados.length - 1) {
        if ((i + 1) % 3 === 0) {
            container.appendChild(document.createElement('br'));
        }
        } else {
        // Agregar espacios en blanco para respetar los espacios faltantes
        var remainingCols = 2 - col;
        for (var j = 0; j < remainingCols; j++) {
            var emptyColContainer = document.createElement('div');
            emptyColContainer.classList.add('col');
            currentRow.appendChild(emptyColContainer);
        }
        }
    }
    
    // Función para obtener la fecha formateada en español
    function obtenerFechaFormateada(fecha) {
        var opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
        return fecha.toLocaleDateString('es-ES', opcionesFecha);
    }
    });
    