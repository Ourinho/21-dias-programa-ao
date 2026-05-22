let idade = Number(prompt("Insira a sua idade:"));
let nome = prompt("Insira seu nome:");

if(idade === 23 && nome === "Thiago"){
    console.log("Seu nome é Thiago e você tem 23 anos.")
}else if(idade === 23 || nome === "Thiago"){
    console.log("Seu nome é Thiago ou você tem 23 anos.")
} else{
    console.log("Seu nome nao é Thiago e você nao tem 23 anos.")
};

