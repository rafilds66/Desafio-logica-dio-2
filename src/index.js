
let rank = calculoVitorias(20,5)
let nivel = " "

function calculoVitorias(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias
    }

if (calculoVitorias <= 10){
    nivel = "Ferro"
}else if(calculoVitorias > 10 && calculoVitorias <= 20){
    nivel = "Bronze"
}else if(calculoVitorias > 20 && calculoVitorias <= 50){
    nivel = "Prata"
}else if(calculoVitorias > 50 && calculoVitorias <= 80){
    nivel = "Ouro"
}else if(calculoVitorias > 80 && calculoVitorias <= 90){
    nivel = "Diamante"
}else if(calculoVitorias > 90 && calculoVitorias <= 100){
    nivel = "Lendário"
}else{
    nivel = "Imortal"
}

console.log("O Herói tem um saldo de " + rank + " e está no nível " + nivel)
  

   