// APARTADO 1: Comparar la longitud de dos cadenas

function compararCadenas(cadena1, cadena2) {
    if (typeof cadena1 !== "string" || typeof cadena2 !== "string") {
        console.log("Error: ambos parámetros deben ser cadenas.");
    } else if (cadena1.length > cadena2.length) {
        console.log("La cadena más larga es: " + cadena1);
    } else if (cadena2.length > cadena1.length) {
        console.log("La cadena más larga es: " + cadena2);
    } else {
        console.log("Las dos cadenas tienen la misma longitud.");
    }
}

compararCadenas("Hola", "Buenos días");
compararCadenas("JavaScript", "Java");
compararCadenas("Hola", 123);
