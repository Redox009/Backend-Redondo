
class Usuario {

    constructor (nombre,apellido,mascotas,libros){

        this.nombre = nombre
        this.apellido = apellido
        this.mascotas = mascotas
        this.libros = libros
    }

    getFullName () {
       return `${this.nombre} ${this.apellido}`;
    }

    addMascota (newMascota) {
        return this.mascotas.push(newMascota);
    }

    countMascota () {
        var numMascotas= this.mascotas.length;
        return numMascotas
    }

    addBook () {
        this.libros.push({nombre: titulo, autor: nombreAutor})
    }

    getBookNames () {
        return this.libros.map( (libro) => libro.nombre)
    }

}

const libros = [
    {
        nombre: "Rebelión en la granja",
        autor: "George Orwell"
    },
    {
        nombre: "Sin blanca en Paris y Londres",
        autor: "George Orwell"
    }

]

let alumno = new Usuario("Fede","Redondo",["Perro", "Gato"],libros)

alumno.addBook("El Principito", "Antoine de Saint-Exupéry")

alumno.addMascota("Loro")

console.log(alumno.countMascota())

console.log(alumno.getBookNames())

console.log(alumno.getFullName())


