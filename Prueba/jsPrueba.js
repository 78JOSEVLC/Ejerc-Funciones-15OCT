
/**
let nombre = 'Juan Perez';
console.log(typeof (nombre));

function invCadena (cad) {
    return cad;
}
console.log(invCadena('Hola'));

function invertirCadena(cad) {
    return cad.split("").reverse().join("");
}
console.log(invertirCadena('orejero'));

console.log('esto es una PRUEBA de JS');  
/** Crea una función que, dada una array de números, devuelva una nueva array que tenga 
    solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8].    
let arrayNrosMayor = []; // Inicializamos [arrayNrosMayor] como un array
let arraySumaNrosMayor = [0]; // Inicializamos [arraySumaNrosMayor] como un array
function arrayNumeros(){
    arrayNumeros = [3, 6, 8, 2, 9, 1]; // damos valores al [arrayNumeros]
    for (let i = 0; i < arrayNumeros.length; i++) {
        if ( arrayNumeros[i] > 5 ) {
            arrayNrosMayor.push(arrayNumeros[i]); // guardamos nros >5
            arraySumaNrosMayor[0] += arrayNumeros[i];
        }
    } 
}
arrayNumeros();
console.log(arrayNrosMayor); // Mostramos los valores >5  
console.log("-------------------------");
console.log(arraySumaNrosMayor); // Mostramos el valor acumulado nros >5 
*/

function getPrecioMostrar(valor) {
    // Verificamos si el valor es un número
    if (typeof valor !== 'number' || isNaN(valor)) {
        return 'formato incorrecto, NO es un NRO.';
    }
    
    // Formateamos el número (con toFixed(2)) a dos decimales y añadimos el símbolo de euro
    return valor.toFixed(2) + ' €';
}

// usamos la Funcion pasandole "valores", Ejemplos... 
console.log(getPrecioMostrar(2));         // "2.00 €"
console.log(getPrecioMostrar(10.5));      // "10.50 €"
console.log(getPrecioMostrar('Hola'));    // "no es un formato correcto"
console.log(getPrecioMostrar(NaN));       // "no es un formato correcto"
console.log(getPrecioMostrar(null));      // "no es un formato correcto"
