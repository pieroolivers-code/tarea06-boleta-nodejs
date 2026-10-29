
const IGV = 0.18;


function validarMonto(monto) {
    if (typeof monto !== "number" || !Number.isFinite(monto)) {
        throw new Error("El monto debe ser un número válido.");
    }

    if (monto < 0) {
        throw new Error("El monto no puede ser negativo.");
    }
}


function calcularIGV(monto) {
    validarMonto(monto);

    const igv = monto - monto / (1 + IGV);
    return Number(igv.toFixed(2));
}


function calcularFactura(monto) {
    validarMonto(monto);

    const total = Number(monto.toFixed(2));
    const igv = calcularIGV(total);
    const subtotal = Number((total - igv).toFixed(2));

    return {
        subtotal,
        igv,
        total,
        porcentajeIGV: IGV * 100
    };
}


function calcularBoleta(monto) {
    return calcularFactura(monto);
}

module.exports = {
    calcularIGV,
    calcularFactura,
    calcularBoleta
};
