// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos

let suma = 0;
let bigger = array[0];
let smaller = 999;
let media = 0;

function doCalculation(array) 
{
    for (let i = 0; i<array.length; i++)
    {
        suma += array[i];
        
        media += array[i]/array.length;

        if(array[i]>bigger){bigger = array[i];}

        if(array[i]<smaller){smaller = array[i]}

        if(array.length%2 !== 0){}
    }
    
    console.log("La suma es: " + suma);
    console.log("La media es: " + media);
    console.log("El numero mas grande es: " + bigger);
    console.log("El numero mas pequeño es: " + smaller);

}



doCalculation([1,2,3,4,9,9])
doCalculation([5,5,5,5,9])
doCalculation([1,1,1,2,2,2,3,3,3,3,4,4,4,5,5,5])