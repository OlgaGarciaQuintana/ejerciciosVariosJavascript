// APARTADO 10: Área de un triángulo con dos lados y un ángulo

function areaTriangulo(lado1, lado2, angulo) {
    let radianes = angulo * Math.PI / 180;
    let area = (1 / 2) * lado1 * lado2 * Math.sin(radianes);
    console.log("El área del triángulo es " + area.toFixed(2));
}

areaTriangulo(5, 8, 30);
areaTriangulo(10, 6, 90);
