// Crear una funcion sumaArreglo() que tome como parámetro un arreglo de números,
// retornar la longitud del arrelog + la suma de todos los números del arreglo.

var numeros=[1, 2, 3, 4, 5];

function sumaArreglo(arreglo) {

    let suma = 0;

    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    
    return arreglo.length + suma;
}

console.log(sumaArreglo(numeros));