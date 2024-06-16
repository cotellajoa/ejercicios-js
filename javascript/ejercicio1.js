function elementosCuadrados(array){
    res = new Array();
    for(let elemento of array){
        elemento.trim();
        Number(elemento);
        res.push(elemento * elemento);
    }
    return res;
}



let arr = prompt('Ingrese los numeros para el array, separados por guión del medio ( - )');

arr = arr.trim();
arr = arr.split("-");

console.log(`Su arreglo original es: ${arr}\nEl arreglo con sus elementos al cuadrado es: ${elementosCuadrados(arr)}`);