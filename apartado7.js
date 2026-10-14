// APARTADO 7: Calcular la media de notas con rest y reduce

function printMedia(nombre, ...notas) {
    if (notas.length === 0) {
        console.log(nombre + " no tiene notas.");
        return;
    }
    let suma = notas.reduce((total, nota) => total + nota, 0);
    let media = suma / notas.length;
    console.log("La media de " + nombre + " es " + media.toFixed(2));
}

printMedia("Pepe", 4.25, 6, 8.5, 9);
printMedia("Ana", 7, 8, 9);
