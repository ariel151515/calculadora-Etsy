/* MODIFICABLES */
const Descuento = 40 // MODIFICABLE
const Precio_pre_descuento = 19.99  // MODIFICABLE
const Precio_final_esperado = 11.99 // MODIFICABLE

/* PRECIOS DE VENTA */
const Descuento_en_plata = Precio_final_esperado * Descuento / 100
const Precio_final = Precio_pre_descuento - Precio_pre_descuento * 40 / 100

/* COSTOS */
const Costo_de_produccion = 5.52
const Listing_Fee = 0.20
const Transaction_Fee = Precio_final_esperado * 6.5 / 100
const Processing_Fee = Precio_final_esperado * 3 / 100
const Costo_de_envio = 0
const Costos_totales = Costo_de_produccion + Listing_Fee + Transaction_Fee + Processing_Fee + Costo_de_envio
const Ganancia = Precio_final - Costos_totales


console.log('\x1b[37mDescuento:', Descuento + '%\x1b[0m');
console.log('\x1b[37mPrecio pre descuento:', '$' + Precio_pre_descuento + '\x1b[0m');
console.log('-------------------------------------------');
console.log('\x1b[34mPrecio final esperado:', Precio_final_esperado + '\x1b[0m');

const precioFinal = (num, numdos) => {
    if (num === numdos) {
        return '\x1b[32mPrecio final: ' + num + '\x1b[0m'; // Verde si coincide
    } else {
        return '\x1b[31mPrecio final: ' + num + '\x1b[0m'; // Rojo si no coincide
    }
}

console.log(precioFinal(Precio_final, Precio_final_esperado));
console.log('-------------------------------------------');
console.log('\x1b[32mGanancia:', '$' + Ganancia + '\x1b[0m');
