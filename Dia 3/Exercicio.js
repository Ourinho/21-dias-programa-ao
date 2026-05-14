let nome = prompt("Insira seu nome:");
let idade = Number(prompt("Insira sua idade:"));
let altura = Number(prompt("Insira sua altura:"));
let peso = Number(prompt("Insira seu peso:"));
let anoNasc = 2026 - idade
let IMC = peso / (altura*altura)

console.log("Ola " + nome + " voce tem " + idade + "anos, " + "nasceu em " + anoNasc + ", " + "tem " + altura + " de altura," + " pesa " + peso + "kg" + " seu IMC é " + IMC + "kg/m2" )

