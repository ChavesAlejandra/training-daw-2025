// Debería imprimir los números del 1 al 5

/*for (let i = 1; i <= 5; i--) {
    console.log(i);
}*/

// Debería calcular el factorial de un número n

/*function factorial(n) {
    let resultado = 1;
    for (let i = 1; i < n; i++) { // <-- off-by-one
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(5)); // Esperado: 120

function maximo(lista) {
    let max = 0; 
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > max) {
            max = lista[i];
        }
    }
    return max;
}

console.log(maximo([-10, -3, -50])); // Esperado: -3

// Debería calcular el precio final con IVA incluido

function precioConIVA(precio, iva) {
    return precio + iva * precio / 100;
}

console.log(precioConIVA(100, 21)); // Esperado: 121

// Debería calcular la media de tres números

function media(a, b, c) {
    return a + b + c / 3;
}

console.log(media(4, 10, 16)); 
// Esperado: 10*/

/*function karateChop(target, array) {
    let low = 0;
    let high = array.length - 1;
  
    while (low <= high) {
      let mid = (low + high) / 2;
      mid = Math.floor(mid)
  
      if (array[mid] === target) {
        return mid;
      } else if (array[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return -1;
  }
  
  function runTests() {
    const tests = [
      { target: 8, array: [1, 3, 5, 7, 9, 11], expected: -1 },
      { target: 2, array: [1, 2, 3, 4, 5], expected: 1 },
      { target: 6, array: [1, 2, 3, 4, 5, 6], expected: 5 },
      { target: 4, array: [1, 2, 3, 4, 5, 6], expected: 3 },
      { target: 10, array: [2, 4, 6, 8, 10, 12], expected: 4 },
      { target: 12, array: [2, 4, 6, 8, 10, 12], expected: 5 }
    ];
  
    tests.forEach((t, i) => {
      const result = karateChop(t.target, t.array);
      console.log(
        `Test ${i + 1}: target=${t.target}, array=[${t.array}] -> result=${result}, expected=${t.expected}`,
        result === t.expected ? "✅" : "❌"
      );
    });
  }
  
  runTests();*/

/*function scopes() {
  let i = 0
  for (let j = 0; j < 10; j++) 
  {
    let i = j
    console.log('i ' + j);
  }
 
  console.log(i);
}*/


//FILTER
/*const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);
 
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
*/

/*const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word, index) => index % 2 === 0);

console.log(result);
// Expected output: Array ["sparay", "exuberant", "present"]

//MAP
/*let users = [
    {id: 0, name: 'John'},
    {id: 1, name: 'Paul'}
]

let ids = users.map(user => user.id)
console.log(ids);

let names = users.map(user => user.name)
console.log(names);

// let usersAdvanced = users.map(user => {
users = users.map(user => {  
    return {
        id: user.id,
        name: user.name,
        surname: 'generico',
        age: Math.floor(Math.random() * 32)
    }
}).filter(user => user.id > 0)

console.log(users);*/

//REDUCE

const array1 = [2, 9, 23, 32, 45, 50]
const reducer = ()