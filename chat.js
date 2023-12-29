/* MODIFICABLES */
const Descuento = 45; // MODIFICABLE
const Precio_final_esperado = 13.99; // MODIFICABLE

/* CALCULOS AUTOMÁTICOS */
const Precio_pre_descuento = Precio_final_esperado / (1 - Descuento / 100);

/* PRECIOS DE VENTA */
const Descuento_en_plata = Precio_pre_descuento * Descuento / 100;
const Precio_final = Precio_pre_descuento - Descuento_en_plata;

/* COSTOS */
const Costo_de_produccion = 6.85;
const Listing_Fee = 0.20;
const Transaction_Fee = Precio_final_esperado * 6.5 / 100;
const Processing_Fee = Precio_final_esperado * 3 / 100;
const Costo_de_envio = 0;
const Costos_totales = Costo_de_produccion + Listing_Fee + Transaction_Fee + Processing_Fee + Costo_de_envio;
const Ganancia = Precio_final - Costos_totales;

console.log('\x1b[37mDescuento:', Descuento + '%\x1b[0m');
console.log('\x1b[37mPrecio pre descuento:', '$' + Precio_pre_descuento.toFixed(2) + '\x1b[0m'); // Redondear a dos decimales
console.log('-----------------------------------------------------------------------------');


const precioFinal = (num, numdos) => {
    if (num === numdos) {
        return '\x1b[32mPrecio final: ' + num.toFixed(2) + '\x1b[0m'; // Verde si coincide
    } else {
        return '\x1b[31mPrecio final: ' + num.toFixed(2) + '\x1b[0m'; // Rojo si no coincide
    }
}

console.log('\x1b[34mPrecio final esperado:', Precio_final_esperado.toFixed(2) + '\x1b[0m'); // Redondear a dos decimales
console.log(precioFinal(Precio_final, Precio_final_esperado));
console.log('\x1b[32mGanancia:', '$' + Ganancia.toFixed(2) + '\x1b[0m'); // Redondear a dos decimales
console.log('-----------------------------------------------------------------------------');


console.log('Precio final 11 oz mango de color:', '$13.99' + ' / ' + 'Precio pre descuento' + ' ' + '$25.44' + ' / ' + 'Descuento' + ' ' + '45%')
console.log('Precio final 15 oz mango de color:', '$15.99' + ' / ' + 'Precio pre descuento' + ' ' + '$29.07' + ' / ' + 'Descuento' + ' ' + '45%')
console.log('-----------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------');
console.log('Precio final 11 oz lisa BLANCA:', '$0.00' + ' / ' + 'Precio pre descuento' + ' ' + '$21.65' + ' / ' + 'Descuento' + ' ' + '40%')
console.log('Precio final 11 oz lisa NEGRA:', '$0.00' + ' / ' + 'Precio pre descuento' + ' ' + '$21.65' + ' / ' + 'Descuento' + ' ' + '40%')
console.log('Precio final 15 oz lisa BLANCA:', '$0.00' + ' / ' + 'Precio pre descuento' + ' ' + '$24.98' + ' / ' + 'Descuento' + ' ' + '40%')
console.log('Precio final 15 oz lisa NEGRA:', '$0.00' + ' / ' + 'Precio pre descuento' + ' ' + '$24.98' + ' / ' + 'Descuento' + ' ' + '40%')