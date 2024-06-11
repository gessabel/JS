//Ejercicio03

/* Declara un array de números. Usar los métodos map, filter y reduce para hacer lo siguiente:
    Multiplicar cada número por 3.
    Filtra los números que son mayores que 10.
    Suma todos los números filtrados.*/

  

    let array1 = [1, 2, 3, 4, 5];

    // Multiplicar cada número por 3
    let arrayMultiplicado = array1.map(num => num*10);
    
    // Filtrar los números que son mayores que 10
    let arrayFiltrado = arrayMultiplicado.filter(num => num > 10);
    
    // Sumar todos los números filtrados
    let suma = arrayFiltrado.reduce((acumulador, num) => acumulador + num, 0);
    
    console.log("array original:" , array1);
    console.log("Array multiplicado:", arrayMultiplicado);
    console.log("Array filtrado:", arrayFiltrado);
    console.log("Suma de los números filtrados:", suma);
    




