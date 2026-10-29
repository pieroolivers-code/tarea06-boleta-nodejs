const { calcularBoleta } = require("./calcularIMC");

const venta = {
    empresa: "TECNOLOGIA DEMO SAC",
    ruc: "20100010100",
    direccion: "CALLE LAS NORMAS 123",
    telefono: "987 654 321",
    correo: "administracion@facturas.net",
    cliente: "CAMILO SANCHEZ",
    dni: "71262017",
    comprobante: "B002-10300866",
    producto: "POLO BASICO",
    talla: "SMALL",
    cantidad: 1,
    precio: 20.00,
    pago: "EFECTIVO"
};

const montoTotal = venta.cantidad * venta.precio;
const boleta = calcularBoleta(montoTotal);

const ancho = 48;
const linea = "=".repeat(ancho);
const separador = "-".repeat(ancho);

function centrar(texto) {
    const espacios = Math.max(0, ancho - texto.length);
    const izquierda = Math.floor(espacios / 2);
    return " ".repeat(izquierda) + texto;
}

function importe(texto, valor) {
    return `${texto.padEnd(29)}S/ ${valor.toFixed(2).padStart(8)}`;
}

function imprimirBoleta() {
    console.log("\n" + linea);
    console.log(centrar(venta.empresa));
    console.log(centrar(`RUC: ${venta.ruc}`));
    console.log(centrar(venta.direccion));
    console.log(centrar(`Tel: ${venta.telefono}`));
    console.log(centrar(venta.correo));
    console.log(linea);

    console.log(centrar("BOLETA DE VENTA ELECTRONICA"));
    console.log(centrar(venta.comprobante));
    console.log(separador);

    console.log(`CLIENTE: ${venta.cliente}`);
    console.log(`DNI: ${venta.dni}`);
    console.log(`FECHA: ${new Date().toLocaleDateString("es-PE")}`);
    console.log(`HORA: ${new Date().toLocaleTimeString("es-PE")}`);
    console.log(separador);

    console.log("CANT.  DESCRIPCION             IMPORTE");
    console.log(separador);

    console.log(
        `${String(venta.cantidad).padEnd(7)}` +
        `${venta.producto} (${venta.talla})`
    );

    console.log(
        importe("PRECIO UNITARIO", venta.precio)
    );

    console.log(
        importe("TOTAL GRAVADO", boleta.subtotal)
    );

    console.log(
        importe(`IGV (${boleta.porcentajeIGV}%)`, boleta.igv)
    );

    console.log(separador);
    console.log(importe("TOTAL A PAGAR", boleta.total));
    console.log(linea);

    console.log("SON: VEINTE CON 00/100 SOLES");
    console.log(`FORMA DE PAGO: ${venta.pago}`);
    console.log("CONDICION DE VENTA: CONTADO");
    console.log("ESTADO: PROCESADO");
    console.log(separador);
    console.log(centrar("REPRESENTACION DE BOLETA DEMO"));
    console.log(centrar("COMPROBANTE DE PRUEBA"));
    console.log(linea + "\n");
}

try {
    imprimirBoleta();
} catch (error) {
    console.error("Error al generar la boleta:", error.message);
}