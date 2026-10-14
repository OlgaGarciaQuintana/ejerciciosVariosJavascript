// APARTADO 5: Buscar una cadena sin distinguir mayúsculas

const buscarTexto = (cadena, busqueda) => {
    if (cadena.toLowerCase().includes(busqueda.toLowerCase())) {
        console.log("Se ha encontrado '" + busqueda + "' en '" + cadena + "'.");
    } else {
        console.log("No se ha encontrado '" + busqueda + "' en '" + cadena + "'.");
    }
}

//arrow function
const buscarTextoArrow = (cadena, busqueda) => {
    if (cadena.toLowerCase().includes(busqueda.toLowerCase())) {
        console.log("Se ha encontrado '" + busqueda + "' en '" + cadena + "'.");
    } else {
        console.log("No se ha encontrado '" + busqueda + "' en '" + cadena + "'.");
    }
}   

buscarTexto("Santiago de Compostela", "COMPO");
buscarTexto("JavaScript", "SCRIPT");
buscarTexto("Buenos días", "noche");
