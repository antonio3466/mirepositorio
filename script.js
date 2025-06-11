import { Persona, Alumno } from "./Persona.js";

var parrafoPersona = document.getElementById("objetoPersona");

var parrafoMetodoPersona = document.getElementById("metodoPersona");

var miPersona = new Persona("carrizo");

var miAlumno = new Alumno("Hernadez","pedro");




parrafoPersona.innerText = miAlumno.apellido + ' '  + miAlumno.nombre

parrafoMetodoPersona.innerText = miPersona.correr();

miPersona.morir();
parrafoMetodoPersona.innerText += miPersona.mostrarEstado(); 
