export class Persona {

    nombre = "[no ingresado]";
    #vive = true;

    constructor (apellido, nombre, dni){
        if ( nombre !== undefined) {
            this.nombre = nombre;
        }
    
        this.apellido = apellido;
        this.dni = dni;
    }

    correr(){
        return "el ñiato está corriendo..";
    }

    morir(){
        this.#vive = false;
    }

    mostrarEstado(){
        if (this.#vive) {
            return " - La Persona está viva";
        }
        return " - La Persona está muerta"
    }

    
     
    mostaraOcupacion() {

        return "la persona esta ocupada";
     }



}




export class Alumno extends Persona {

 matricula;
 clase;
 aula;


 escribir(){

    return "escribiendo"
 }
     

 
 estudia() {
   return "estudiando"

 }

 mostaraOcupacion() {

    return "El alumno esta estudiando";
 }




}