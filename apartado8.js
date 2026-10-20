// APARTADO 8: Ordenar cadenas de mayor a menor longitud

let palabras = ["sol", "ordenador", "casa", "javascript", "luz"];
console.log("Array original:", palabras.slice());

let ordenadas = palabras.slice().sort((a, b) => b.length - a.length);
console.log("Ordenadas de mayor a menor longitud:", ordenadas);

//arrow function
const ordenarCadenas = (array) => {
    console.log("Array original:", array.slice());
    let ordenadas = array.slice().sort((a, b) => b.length - a.length);
    console.log("Ordenadas de mayor a menor longitud:", ordenadas);
}

ordenarCadenas(palabras);
