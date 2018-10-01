function fun1(n, array){
    for(let i of array){
        if (i == n){
            cont += 1;
        }
    }
    return cont;
}

function fun2(array2){
    for(let i of array2){
        cont += i;
    }
    promedio = cont/array2.length;
    console.log(`la suma de los numeros del arreglo es:  ${cont}, y su promedio es ${promedio}`)
}
var aux = [];
var aux2 = [];
function fun3(array3){
    for (let i of array3){
        if(aux.includes(typeof i)){
            aux2[aux.indexOf(typeof i)] += 1;
        }
        else{
            aux.push(typeof i);
            aux2.push(1);
        }
    }
    for(let i = 0; i < aux.length; i++){
        console.log(aux[i]+" " + aux2[i]);
    }
    
}
var array4 = [1,2,3,4,5,6]
function fun4(array4){
    for(let i = 0; i < array4.length; i++){
        if ((array4.length) % 2 == 0 ){
            console.log(array4.shift(i) + array4.pop(i));
        }
        else{
            console.log(array4.shift(i) + array4.pop(i));
        }
    }
}