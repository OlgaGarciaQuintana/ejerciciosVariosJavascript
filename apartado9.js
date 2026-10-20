// APARTADO 9: Sumar las cifras de cada número sin bucles

let numeros = [123, 34, 52, 987];

let sumas = numeros.map(numero => {
    let cifras = Array.from(String(numero));
    return cifras.reduce((suma, cifra) => suma + Number(cifra), 0);
});

console.log("Array original:", numeros);
console.log("Suma de sus cifras:", sumas);

//arrow function
const sumarCifras = (array) => {
    let sumas = array.map(numero => {
        let cifras = Array.from(String(numero));
        return cifras.reduce((suma, cifra) => suma + Number(cifra), 0);
    });
    console.log("Array original:", array);
    console.log("Suma de sus cifras:", sumas);
}

sumarCifras(numeros);