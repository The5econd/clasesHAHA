var tareas = ["Preparar moodle", "comer", "jugar", "hacer tareas"]

function queTengoHacer(){
    console.log("tu tarea urgente es" + tareas.shift());
}

function agregarN(evento){
    console.log("usted agrego" + evento);
    tareas.push(evento);
}

function agregarURG(urgente){
    tareas.unshift(urgente);
    console.log("usted agrego" + urgente);
}

for(let e of tareas){
    console.log(e);
}
/*TAMBIEN ES LO MISMO*/
for(let i=0; i<tareas.length; i++){
    console.log(e);
}

var journal = [
    dia = {
        arreglo: ["comer", "baniarse", "hablar", "jugar"],
        accidente: true
    },
    dia = {
        arreglo: ["comer", "mani", "hablar", "jugar"],
        accidente: true
        }
];
var array2 = [];
function getEvent(journal){
    for (let i = 0; i<journal.length; i++){
        for(let j of i.arreglo){
            if(!array2.includes(j)){
                array2.push(j);
            }
        }
    }
    console.log(array3);
}

[1,2,3,4]
slice(1,2) -> [2,3]

[1,2,3].concat([4,5,6]) - > [1,2,3,4,5,6]

"    ok     ".trim() ->  "ok"

"208978".padStart(8,0) -> "00208978"


var array4 = [1,2,3,4]
function Posicion(array4, position){
    let a = array4.slice(position); /*malooooooooooooooooooooooooooo*/
    a.shift();
    array4.concat([a]);
}
function remove(array4, index){
    return array4.slice(0,index).concat(array4.slice(index+1));
}

function max(... numbers){
    let max = -Infinity;
    for(let number of numbers){
        if(number > max){
            max = number;
        }
    }
    return max;
}

let a = ["a", "b", "c"]
let b = ["1", ...a, "2"]
RESPUESTA  - >  b = ["1","a", "b", "c", "2"];