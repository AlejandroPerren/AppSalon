CREATE DATABASE app_salon;

USE app_salon;

CREATE TABLE usuarios (
  id INT NOT NULL AUTO_INCREMENT,
  dni VARCHAR(80) NOT NULL,
  password VARCHAR(80) NOT NULL,
  correo VARCHAR(80) NOT NULL,
  tel VARCHAR(80) NOT NULL,
  rol VARCHAR(80) NOT NULL DEFAULT 'usuario',
  PRIMARY KEY (id)
);

CREATE TABLE servicios (
  id INT NOT NULL AUTO_INCREMENT,
  nombre_serv VARCHAR(50) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  duracion INT NOT NULL,
  descripcion TEXT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE citas (
  id_cita INT NOT NULL AUTO_INCREMENT,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  id_usuario INT,
  PRIMARY KEY (id_cita),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE
);
CREATE TABLE citas_servicios (
  id_cita INT,
  id_servicio INT,
  PRIMARY KEY (id_cita, id_servicio),
  FOREIGN KEY (id_cita) REFERENCES citas(id_cita) ON DELETE CASCADE,
  FOREIGN KEY (id_servicio) REFERENCES servicios(id) ON DELETE CASCADE
);

SELECT citas.id ,usuarios.dni , servicios.nombre_servq , citas.fecha,  citas.hora, servicios.duracion, servicios.precio, servicios.descripcion
FROM usuarios
JOIN citas ON usuarios.id = citas.id_usuario
JOIN citas_servicios ON citas.id = citas_servicios.id_cita
JOIN servicios ON servicios.id = citas_servicios.id_servicio
WHERE usuarios.dni = '12345678';