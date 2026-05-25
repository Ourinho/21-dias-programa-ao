let fome = prompt("Esta com fome? (sim/nao) ");
let dinheiro = prompt("Voce tem dinheiro? (sim/nao) ");
let restaurante = prompt("Restaurante esta aberto? (sim/nao) ");

if(fome === "nao" || dinheiro === "nao"){
    console.log("Hoje a janta sera em casa")
}else if(dinheiro === "sim" && restaurante === "nao"){
    console.log("Peça um delivery")
}else{
    console.log("hoje o jantar sera no seu restaurante favorito!")
}