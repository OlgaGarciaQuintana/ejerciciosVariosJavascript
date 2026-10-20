// APARTADO 6: Modificar un array paso a paso

let elementos = ["A", "B", "C", "D"];
console.log("Array original:", elementos.slice());

elementos.push("E", "F");
elementos.unshift("X", "Y");
console.log("Con elementos al principio y al final:", elementos.slice());

// Eliminamos las posiciones 3, 4 y 5 (contando desde 1).
elementos.splice(2, 3);
console.log("Después de eliminar las posiciones 3 a 5:", elementos.slice());

// Insertamos dos elementos justo antes del último.
elementos.splice(elementos.length - 1, 0, "M", "N");
console.log("Después de insertar dos elementos:", elementos.slice());

console.log(elementos.join(" ==> "));

//arrow function
const modificarArray = () => {
    let elementos = ["A", "B", "C", "D"];
    console.log("Array original:", elementos.slice());

    elementos.push("E", "F");
    elementos.unshift("X", "Y");
    console.log("Con elementos al principio y al final:", elementos.slice());

    // Eliminamos las posiciones 3, 4 y 5 (contando desde 1).
    elementos.splice(2, 3);
    console.log("Después de eliminar las posiciones 3 a 5:", elementos.slice());

    // Insertamos dos elementos justo antes del último.
    elementos.splice(elementos.length - 1, 0, "M", "N");
    console.log("Después de insertar dos elementos:", elementos.slice());

    console.log(elementos.join(" ==> "));
}
