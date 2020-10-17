class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse() {

        return "Mi nombre es " + this.nombre + " y tengo " + this.edad + " años";
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, profesor) {
        super(nombre, edad);
        this.profesor = profesor;
    }

    estudiando() {
        return "Estudiando con " + this.profesor;
    }

    setProfesor(profesor) {
        this.profesor = profesor
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, estudiantes) {
        super(nombre, edad);
        if(estudiantes) {
            estudiantes.forEach(i => i.setProfesor(nombre));
            this.estudiantes = estudiantes;
        } else {
            this.estudiantes = [];
        }
    }

    enseñando() {
       this.estudiantes.forEach(i => console.log("Le estoy ensañando a " + i.nombre));
    }

    addEstudiante(estudiante) {
        estudiante.setProfesor(this.nombre);
        this.estudiantes.push(estudiante);
    }
}

var Alumnos = [
    new Estudiante("Pedro", 18),
    new Estudiante("Andres", 25)
];

var profesor = new Profesor("Jorge", 22, Alumnos);
console.log(profesor.presentarse());


profesor.addEstudiante(new Estudiante("Ana", 21));

console.log(profesor.enseñando());