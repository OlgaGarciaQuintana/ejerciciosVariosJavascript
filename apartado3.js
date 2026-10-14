// APARTADO 3: Contar cuántas veces aparece un carácter

function contarCaracter(cadena, caracter) {
    cadena = String(cadena);
    caracter = String(caracter);

    if (caracter.length !== 1) {
        console.log("Error: el segundo parámetro debe tener un solo carácter.");
        return;
    }

    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }
    console.log("El carácter '" + caracter + "' aparece " + contador + " veces.");
}

//arrow function
const contarCaracterArrow = (cadena, caracter) => {
    cadena = String(cadena);
    caracter = String(caracter);

    if (caracter.length !== 1) {
        console.log("Error: el segundo parámetro debe tener un solo carácter.");
        return;
    }

    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }
    console.log("El carácter '" + caracter + "' aparece " + contador + " veces.");
}

contarCaracter("carcasa", "a");
contarCaracter("banana", "n");
contarCaracter("Hola", "la");
