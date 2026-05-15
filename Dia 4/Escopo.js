let idade = Number(prompt("Insira sua idade:"));

if(idade <= 10){
    console.log("idade")
    let dentroEscopo = "thiago"
    console.log(dentroEscopo)
    console.log("Vc tem menor ou 10 anos.")
    if(true){
        console.log("Estou dentro do terceiro escopo")
        console.log(dentroEscopo)
    }
}else{
    console.log("Vc tem mais que 10 anos")
}

console.log("SAI DO ESCOPO DO IF")
console.log(dentroEscopo)