// APARTADO 4: Calcular el precio final con impuestos

function precioConImpuesto(producto = "Producto genérico", precio = 100, impuesto = 21) {
    producto = String(producto);
    precio = Number(precio);
    impuesto = Number(impuesto);

    if (Number.isNaN(precio) || Number.isNaN(impuesto)) {
        console.log("Error: el precio y el impuesto deben ser números válidos.");
    } else {
        let precioFinal = precio + precio * impuesto / 100;
        console.log(producto + ": " + precioFinal.toFixed(2) + " €");
    }
}

precioConImpuesto();
precioConImpuesto("Libro", 20, 10);
precioConImpuesto("Camiseta", 15);
precioConImpuesto("Ordenador", "precio", 21);
