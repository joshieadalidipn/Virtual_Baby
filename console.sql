drop database if exists Virtual_Baby;
create database Virtual_Baby;
USE Virtual_Baby;

-- Crear una tabla para almacenar información de usuario.
CREATE TABLE usuario
(
    id_usuario       INTEGER PRIMARY KEY,   -- Identificador único del usuario.
    nombre_usuario   VARCHAR(30)  NOT NULL, -- Nombre del usuario.
    primer_apellido  VARCHAR(12)  NOT NULL, -- Apellido paterno del usuario.
    segundo_apellido VARCHAR(12)  NOT NULL, -- Apellido materno del usuario.
    email            VARCHAR(30)  NOT NULL, -- Correo electrónico del usuario.
    telefono_casa    VARCHAR(10), -- Teléfono de casa del usuario.
    telefono_celular VARCHAR(10), -- Teléfono celular del usuario.
    password         VARCHAR(255), -- Hash del contraseña usando Argon2.
    rfc              VARCHAR(12), -- Registro Federal de Contribuyentes del usuario.
    domicilio        VARCHAR(80), -- Dirección del domicilio del usuario.
    curp             VARCHAR(18), -- Clave Única de Registro de Población del usuario.
    sexo             VARCHAR(1), -- Sexo del usuario.
    fecha_nacimiento DATE        -- Fecha de nacimiento del usuario.
);

-- Crear una tabla para almacenar detalles adicionales sobre los usuarios que son tutores.
CREATE TABLE Tutor
(
    id_usuario        INTEGER PRIMARY KEY REFERENCES usuario (id_usuario),
    fecha_bautizo     DATE,        -- Fecha de bautizo del usuario si es designado.
    telefono_trabajo  VARCHAR(15), -- Teléfono del trabajo del usuario si es designado.
    domicilio_trabajo VARCHAR(80), -- Dirección del trabajo del usuario si es designado.
    foto              BLOB         -- Foto del usuario en formato blob.
);
create table Salon
(
    id_salon INTEGER PRIMARY KEY,
    nombre   VARCHAR(5) NOT NULL
);

CREATE TABLE Grupo
(
    id_grupo INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_salon INTEGER REFERENCES Salon (id_salon),
    nombre   VARCHAR(5) NOT NULL
);
-- Crear una tabla para almacenar detalles adicionales sobre los usuarios que son docentes.
CREATE TABLE Docente
(
    id_docente INTEGER PRIMARY KEY REFERENCES usuario (id_usuario),
    id_grupo   INTEGER REFERENCES Grupo (id_grupo), -- Identificador del grupo asignado al docente.
    grado      VARCHAR(10)                          -- Grado de educación del docente (ej. maestría, doctorado).
);

-- Crear una tabla para almacenar detalles adicionales sobre los usuarios que son médicos.
CREATE TABLE Medico
(
    id_medico          INTEGER PRIMARY KEY REFERENCES usuario (id_usuario),
    cedula_profesional VARCHAR(20) -- Número de cédula profesional del médico.
);

-- Crear una tabla para almacenar detalles adicionales sobre los usuarios que son trabajadores sociales.
CREATE TABLE Trabajador_social
(
    id_trabajador_social INTEGER PRIMARY KEY REFERENCES usuario (id_usuario)
);

-- Crear una tabla para almacenar detalles adicionales sobre los usuarios que son miembros del área de capital humano.
CREATE TABLE Capital_humano
(
    id_capital_humano INTEGER PRIMARY KEY REFERENCES usuario (id_usuario)
);

CREATE TABLE Infante
(
    id_infante       INTEGER PRIMARY KEY,
    id_grupo         INTEGER REFERENCES Grupo (id_grupo),
    id_tutor         INTEGER REFERENCES usuario (id_usuario),

    -- Nombre completo
    nombres_infante  VARCHAR(30) NOT NULL,
    primer_apellido  VARCHAR(15) NOT NULL,
    segundo_apellido VARCHAR(15) NOT NULL,

    fecha_nacimiento DATE        NOT NULL,
    sexo             VARCHAR(1)  NOT NULL,

    -- Datos médicos
    forma_parto      VARCHAR(10) NOT NULL,
    alergias         TEXT        NOT NULL,
    padecimientos    TEXT        NOT NULL,
    enfermedades     TEXT        NOT NULL,
    peso             VARCHAR(8)  NOT NULL,
    talla            VARCHAR(8)  NOT NULL,
    altura           VARCHAR(8)  NOT NULL,
    curp             VARCHAR(18) NOT NULL,
    vive_con         TEXT        NOT NULL,
    numero_hermanos  INTEGER     NOT NULL,
    color_alma       VARCHAR(50) NOT NULL,
    familiograma     BLOB
);



CREATE TABLE Representante
(
    id_representante INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_infante       INTEGER REFERENCES Infante (id_infante),
    nombre           VARCHAR(30) NOT NULL,
    primer_apellido  VARCHAR(15),
    segundo_apellido VARCHAR(15),
    foto             BLOB
);

CREATE TABLE Pertenencia
(
    id_pertenencia     INTEGER PRIMARY KEY,
    id_infante         INTEGER REFERENCES Infante (id_infante),
    nombre_pertenencia TEXT NOT NULL
);

CREATE TABLE Observacion
(
    id_observacion INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_docente     INTEGER REFERENCES Docente (id_docente),
    id_infante     INTEGER REFERENCES Infante (id_infante),
    observaciones  TEXT NOT NULL
);


-- Datos
-- Inserción de tutores

INSERT INTO usuario (id_usuario, nombre_usuario, primer_apellido, segundo_apellido, email, telefono_casa,
                     telefono_celular, password, rfc, domicilio, curp, sexo, fecha_nacimiento)
VALUES (1, 'Fredy', 'Velázquez', 'García', 'fredy.velg@gmail.com', '5551234', '5512345678', 'contraseña',
        '1234567890AB', 'Av. Revolución', '1234567890ABCDEFGH', 'H', '1980-01-01');

INSERT INTO usuario (id_usuario, nombre_usuario, primer_apellido, segundo_apellido, email, telefono_casa,
                     telefono_celular, password, rfc, domicilio, curp, sexo, fecha_nacimiento)
VALUES (2, 'Fredy', 'Velázquez', 'García', 'fredy.velg@gmail.com', '5551234', '5512345678', 'contraseña',
        '1234567890AB', 'Av. Revolución', '1234567890ABCDEFGH', 'H', '1980-01-01');

INSERT INTO usuario (id_usuario, nombre_usuario, primer_apellido, segundo_apellido, email, telefono_casa,
                     telefono_celular, password, rfc, domicilio, curp, sexo, fecha_nacimiento)
VALUES (3, 'Fredy', 'Velázquez', 'García', 'fredy.velg@gmail.com', '5551234', '5512345678', 'contraseña',
        '1234567890AB', 'Av. Revolución', '1234567890ABCDEFGH', 'H', '1980-01-01');

-- Salones
INSERT INTO Salon (id_salon, nombre)
VALUES (1, 'A1');
INSERT INTO Salon (id_salon, nombre)
VALUES (2, 'A2');
INSERT INTO Salon (id_salon, nombre)
VALUES (3, 'A3');


-- Grupos
INSERT INTO Grupo (id_grupo, id_salon, nombre)
VALUES (1, 1, 'G3');
INSERT INTO Grupo (id_grupo, id_salon, nombre)
VALUES (2, 2, 'G2');
INSERT INTO Grupo (id_grupo, id_salon, nombre)
VALUES (3, 3, 'G1');


-- Inserción de infantes
INSERT INTO Infante (id_infante, id_grupo, id_tutor, nombres_infante, primer_apellido, segundo_apellido,
                     fecha_nacimiento, sexo,
                     forma_parto, alergias, padecimientos, enfermedades, peso, talla, altura, curp, vive_con,
                     numero_hermanos, color_alma, familiograma)
VALUES (1, 1, 1, 'Urias', 'Pérez', 'García', '2019-01-01', 'M', 'Natural', 'Ninguna', 'Ninguno', 'Ninguna', '5.5', '55',
        '60',
        'XXXX123456XXXX', 'Con sus padres Fredy y Pulpa y su abuelita Lewis', 1, 'Azul', NULL);
INSERT INTO Infante (id_infante, id_grupo, id_tutor, nombres_infante, primer_apellido, segundo_apellido,
                     fecha_nacimiento, sexo,
                     forma_parto, alergias, padecimientos, enfermedades, peso, talla, altura, curp, vive_con,
                     numero_hermanos, color_alma, familiograma)
VALUES (2, 2, 2, 'María', 'García', 'Martínez', '2018-05-20', 'F', 'Cesárea', 'Polvo', 'Ninguno', 'Ninguna', '6.2',
        '60',
        '65', 'YYYY123456YYYY', 'Con su abuela', 2, 'Rojo', NULL);

INSERT INTO Infante (id_infante, id_grupo, id_tutor, nombres_infante, primer_apellido, segundo_apellido,
                     fecha_nacimiento, sexo,
                     forma_parto, alergias, padecimientos, enfermedades, peso, talla, altura, curp, vive_con,
                     numero_hermanos, color_alma, familiograma)
VALUES (3, 1, 3, 'Alejandro', 'López', 'Ramírez', '2020-08-15', 'M', 'Natural', 'Ninguna', 'Ninguno', 'Ninguna', '4.8',
        '50',
        '55', 'asdasd', 'Con sus padres y su hermano', 1, 'Verde', NULL);


-- Pertenencias del niño
INSERT INTO Pertenencia (id_pertenencia, id_infante, nombre_pertenencia)
VALUES (1, 2, 'Pelota');

INSERT INTO Pertenencia (id_pertenencia, id_infante, nombre_pertenencia)
VALUES (2, 3, 'Muñeca');

INSERT INTO Pertenencia (id_pertenencia, id_infante, nombre_pertenencia)
VALUES (3, 1, 'Carrito');



-- INSERT INTO Observacion (id_observacion, id_docente, id_infante, observaciones)
-- VALUES (1, 1, 2, 'El infante estuvo muy inquieto hoy durante la clase');

-- INSERT INTO Observacion (id_observacion, id_docente, id_infante, observaciones)
-- VALUES (2, 1, 1, 'El infante demostró un gran interés en los bloques de construcción hoy');

-- INSERT INTO Observacion (id_observacion, id_docente, id_infante, observaciones)
-- VALUES (3, 1, 3, 'El infante mostró una actitud positiva durante la hora de lectura hoy');
