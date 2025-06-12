import { Persona, Alumno } from "./Persona.js";

var parrafoPersona = document.getElementById("objetoPersona");

var parrafoMetodoPersona = document.getElementById("metodoPersona");

var miPersona = new Persona("carrizo", "juan carlos");

var miAlumno = new Alumno("Hernadez","pedro");



miAlumno.aula = "5 17"
parrafoPersona.innerText = miAlumno.apellido + ' '  + miAlumno.nombre

parrafoMetodoPersona.innerText = miAlumno.correr();

miPersona.morir();
parrafoMetodoPersona.innerText += miPersona.mostrarOcupacion(); 
