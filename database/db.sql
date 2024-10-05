CREATE DATABASE app_salon;

USE app_salon;
CREATE TABLE IF NOT EXISTS usuarios (
  id INT NOT NULL AUTO_INCREMENT,
  dni VARCHAR(80) NOT NULL,
  password VARCHAR(80) NOT NULL,
  correo VARCHAR(80) NOT NULL,
  tel VARCHAR(80) NOT NULL,
  rol VARCHAR(80) NOT NULL DEFAULT 'usuario',
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS servicios (
  id INT NOT NULL AUTO_INCREMENT,
  nombre_serv VARCHAR(50) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  duracion INT NOT NULL,
  descripcion TEXT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS citas (
  id_cita INT NOT NULL AUTO_INCREMENT,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  id_usuario INT,
  PRIMARY KEY (id_cita),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS citas_servicios (
  id_cita INT,
  id_servicio INT,
  PRIMARY KEY (id_cita, id_servicio),
  FOREIGN KEY (id_cita) REFERENCES citas(id_cita) ON DELETE CASCADE,
  FOREIGN KEY (id_servicio) REFERENCES servicios(id) ON DELETE CASCADE
);





