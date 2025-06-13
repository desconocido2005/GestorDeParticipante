USE master;

CREATE DATABASE RegistroDeParticipantes;

use RegistroDeParticipantes;


CREATE TABLE participantes(
	id int identity(1,1) primary key,
	nombre varchar(120),
	correo varchar(120),
	equipo int ,
	especialidad varchar(120), -- frontend - backend - fullstack
	nivel varchar(100) -- junior - semisenior - senior
);

INSERT INTO participantes ([nombre],[correo],[equipo],[especialidad],[nivel]) values 
('jhon','jhon@gmail.com',1, 'fullstack', 'junior'),
('Emanuel','emanuel@gmail.com',1, 'frontend', 'senior'),
('Ana','Ana@gmail.com',1, 'backend', 'semisenior');

SELECT * FROM participantes;