// APARTADO 11: Formatear una fecha usando Date

function mostrarFecha(fechaTexto) {
    let partes = fechaTexto.split("-");
    let fecha = new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));

    let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    console.log(dias[fecha.getDay()] + ", " + fecha.getDate() + " de " +
        meses[fecha.getMonth()] + " de " + fecha.getFullYear());
}

mostrarFecha("2019-02-28");
mostrarFecha("2026-10-14");
