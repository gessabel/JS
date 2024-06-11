// Crear una funcion con el npmbre de funcionArray() que tome dos arreglos de numeros
// enteros como parámetro y retornar un único arreglo, cada elemento del arreglo debe estar
// multiplicado por dos.

/* 

*/
var arre1 = [1, 2,3];
var arre2 = [4, 5];


function funcionArray(arre1, arre2) {
    let arre3=[];
    let tamañoarre3;
    let index2;

        /**Recorremos un for para llenar los datos del primer array */
        for (let index = 0; index < arre1.length; index++) {
            arre3[index]= arre1[index]*2;

        }

        /*let index2= arre1.length;
        let lengtharray3=index2+arre2.length;*/
        index2=arre1.length;
        console.log(index2);

        tamañoarre3=arre2.length;
        console.log(tamañoarre3);

        tamañoarre3+=index2;
        console.log(tamañoarre3);

        /**Recorremos un for para llenar los datos del segundo array */
            for (let i=0; i <arre2.length; i++) {
                arre3[index2 + i]= arre2[i]*2;
            }

return arre3;
}

console.log(funcionArray(arre1,arre2));