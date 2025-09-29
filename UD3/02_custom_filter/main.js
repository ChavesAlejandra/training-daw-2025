const assert = require('assert').strict;

function select(array, condition) 
{
    let result = []

    for (let i = 0; i < array.length; i++) { if (condition(array[i])) { result.push(array[i]) } }
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

function isPair(value) {return value % 2 ===2 } //Esto es una funcion callBack y devuelve siempre un boolean (true/false)

function isGt15(value) {return value > 15 }

// sólo pares
assert.deepStrictEqual(select(values, isPair), [2])

// mayores que 15
assert.deepStrictEqual(select(values, isGt15), [17, 23, 29])

// menores de 10
assert.deepStrictEqual(select(values, (value) => value<10), [1, 2, 3, 5, 7]) //la flecha tambien es una forma de escribir una funcion