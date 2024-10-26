
console.log('comenzando con Ejerc Funciones');

/** Crea una función resta que espere dos parámetros a y b, y 
 * que devuelva la resta de los mismos. */

function resta(a,b) {
    return a - b;
}
console.log(resta(7,5)); // OK...

/* Crea una función la cual te pregunte por una nota del 0 al 10 y, dependiendo del número, te devuelva la siguiente clasificación.
Nota: Debes de usar el Switch.
0 - 4: Insuficiente.
5 - 6: Suficiente.
7 - 8: Notable.
9 - 10: Sobresaliente.  */

function colegio () {
    let nota = prompt ('introduce tu Nota')
    nota = +nota
    let resultado =""
    console.log(nota)
    switch (nota) {
        case 4:
        case 3:
        case 2:
        case 1:    
            resultado = 'Insuficiente, intentalo de nuevo'    
            break;
        case 6:
        case 5:    
            resultado = 'Suficiente, has aprobado'
            break;
        case 8:
        case 7:
            resultado = 'Notable, sigue asi!!!'   
            break;
        case 10:
        case 9:
            resultado = 'Sobresaliente eres un genio!!!'
            break;        
            default:
    }  
    return resultado;  
}
//console.log(colegio());

/** Crea la función "duplicaNumero" debe recibir un tipo number y devolver el doble del valor recibido. 
    Si la función no recibe un dato tipo number debe devolver el string "Debo ser ejecutada con un número". */
    
function duplicaNumero(num) {
    //let num = prompt ('introducir un NUMERO')
    //num = +num;
    if (typeof num == 'number') { 
        return num * 2
    } else {
        return 'Debe ser ejecutada con un número'
    }
}
console.log(duplicaNumero('a')); 

/** Crea la función caracterInicial. Debe recibir un tipo string y devolver un string con el primer carácter. 
    Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
    Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.
 */
function caracterInicial(cInicial){
    if(typeof cInicial !== 'string'){
        return 'Debo ser ejecutada con un String'
    } else if (cInicial == '') {
        return 'Debo ser ejecutada con un String NO VACIO'
    } else { return cInicial.charAt(0)
    } 
}
console.log(caracterInicial(''));

/** Crea la función ultimoCaracter. Debe recibir un tipo string y devolver un string con el último carácter.
    Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
    Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.  */
function ultimoCaracter(ultCarat){
    if(typeof ultCarat !== 'string'){
        return 'Debo ser ejecutada con un String'
    } else if (ultCarat == '') {
        return 'Debo ser ejecutada con un String NO VACIO' 
    } else { return ultCarat.at(-1)// at() nuevo metodo de JS permite nros negativos
    } 
}
console.log(ultimoCaracter('jose'));

/** Crea la función "cuentaCaracteres". Debe recibir un tipo string y devolver un number 
    con el número de carácteres.     Si la función NO recibe un dato tipo string 
    debe devolver el string 'Debo ser ejecutada con un string'. */
function cuentaCaracteres(nroCarat){
    if(typeof nroCarat !== 'string'){
        return 'Debo ser ejecutada con un String'
    } else {  
        return nroCarat.length
    } 
}
console.log(cuentaCaracteres('joseFrancisco'));  // son 13 caracteres...

/** Un "palíndromo" es una palabra que se escribe igual del derecho que del revés, 
    por ejemplo: orejero, rallar o somos.    Crea la función "esPalindromo" 
    que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
    Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'.   */
function esPalindromo(cad) {
    let esPali = cad.split("").reverse().join("");
    console.log(esPali);
    if (typeof cad !== 'string' || cad === '' ) {
        console.log('NO es un FORMATO correcto' );
    } else if (cad === esPali){ 
        console.log('la cadena de texto es un PALINDROMO');
    }
    return esPali
}
esPalindromo('orejero');

/** Crea la función division que acepte como argumento dos números 
    y devuelva el resultado de su división. */
 function division(a,b) {
    let result = a/b;
    return result
 }
 division(8,2)
 console.log(result);

/** Crea una función que, dada una array de números, devuelva una nueva array que tenga 
    solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]. */    
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
arrayNumeros();  // ejecutamos la Funcion...
console.log(arrayNrosMayor); // Mostramos los valores >5  
console.log("-------------------------");
console.log(arraySumaNrosMayor); // Mostramos el valor final luego de acumular los nros >5 

/**Crea  la  función  *getPrecioMostrar*  para  que  devuelva  una 
cadena de texto con formato precio con dos decimales. 
Para 2 debería devolver 2.00 €.  
o  Si  la  función  no  recibe  un  número  debería  devolver 
devolver 'no es un formato correcto'.  */
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

/** Crea una función que nos pida un número por prompt y que nos indique 
    si es o no un número primo.   Debe devolver true si es primo, 
    sino false.      Un número primo es aquel que solo puede dividirse 
    entre 1 y sí mismo. Por ejemplo: 25 no es primo, 
    ya que 25 es divisible entre 5, sin embargo, 17 si es primo. */  
let peticion = prompt("introduce un nro");
// hace la Funcion con *parametro* (z), luego cuando ejecuta/llama a
// la Funcion le pasa como parametro: la variable *peticion* (= al nro introducido)
// de esta forma la Funcion "nroPrimo" se puede usar cuando a necesitemos 
// y en cada caso le pasaremos el parametro previsto
function nroPrimo(z) {
    if (typeof z == "number") {
        let x = 0;
        for (let i=0; i<=a; i++) {
            if (z % i == 0) {
                x++
            }
        }
        if (x==2) {
            alert("*peticion* es un nuro PRIMO!!")
        }
        else{
            alert ("*peticion* NNOO es un nro PRIMO");
        }
    }
}
peticion += peticion;
nroPrimo(peticion);
    