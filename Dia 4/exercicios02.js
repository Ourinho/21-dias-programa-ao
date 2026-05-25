let nome = prompt("Insira seu nome: ");
let idade = Number(prompt("Insira sua idade: "));
let cnh = prompt("Voce possui CNH? (sim/nao) ");
let temCarro = prompt("Voce possui um carro? (sim/nao) ");

if(idade <= 17 || cnh === "nao"){
    console.log(nome + ", voce nao pode dirigir.")
}else if(cnh === "sim" && temCarro === "nao"){
    console.log(nome + ", voce pode dirigir mas nao tem um carro.")
}else (
    console.log(nome + ", voce sera o motorista!")
)
