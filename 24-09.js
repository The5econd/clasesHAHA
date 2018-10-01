var dia = [
    diario = {
        arreglo: ["comer", "baniarse", "hablar", "jugar"],
        accidente: true
    },
    diario2 = {
        arreglo: ["comer", "mani", "hablar", "jugar"],
        accidente: true
        }
];




function agregar (arreglo, accidente){
    dia.push({arreglo, accidente})
}

agregar(["comio", "trago", "cago"],false);


/*version con matriz*/
var arreglo1 = [3,5];
var arreglo2 = [5,8];
function fi (arreglo1, arreglo2){
    a = arreglo1[0];
    b = arreglo1[1];
    c = arreglo2[0];
    d = arreglo2[1];
    console.log((a*d-b*c)/Math.sqrt((a+c)*(b+d)*(a+b)*(c+d)));
}
/*version sin matriz*/
function fi (arreglo1){
    a = arreglo1[0];
    b = arreglo1[1];
    c = arreglo1[2];
    d = arreglo1[3];
    console.log((a*d-b*c)/Math.sqrt((a+c)*(b+d)*(a+b)*(c+d)));
}



var tablita = (event) => {
    var array = [0,0,0,0];
    for(let i = 0; i <= journal.length; i++){
        let index = 2;
        if(dia[i].event.includes(mani)) index -=2;
        if(!dia[i].accidente) index += 1;
        array[index] ++;
    }
    return
}