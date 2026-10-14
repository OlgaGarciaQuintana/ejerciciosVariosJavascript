// APARTADO 2: Duplicar un número varias veces

function duplicarVeces(veces, numero) {
    for (let i = 0; i < veces; i++) {
        console.log(numero);
        numero = numero * 2;
    }
}

duplicarVeces(4, 6);
duplicarVeces(3, 5);

//arrow function
const duplicarVecesArrow = (veces, numero) => {
    for (let i = 0; i < veces; i++) {
        console.log(numero);
        numero = numero * 2;
    }
}
