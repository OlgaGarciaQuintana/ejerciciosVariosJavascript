// APARTADO 12: Formatear una fecha con Intl

function formatearFecha(fecha) {
    let fechaNueva = new Date(fecha + "T00:00:00");

    let resultado = new Intl.DateTimeFormat("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(fechaNueva);

    console.log(resultado);
}

formatearFecha("2019-02-28");
formatearFecha("2026-10-14");
formatearFecha("2025-12-25");

//arrow function
const formatearFechaArrow = (fecha) => {
    let fechaNueva = new Date(fecha + "T00:00:00");

    let resultado = new Intl.DateTimeFormat("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(fechaNueva);

    console.log(resultado);
}

formatearFechaArrow("2019-02-28");
formatearFechaArrow("2026-10-14");
formatearFechaArrow("2025-12-25");