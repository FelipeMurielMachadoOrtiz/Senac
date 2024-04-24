/*let i = 0

while(i<10){
    alert(i)
    i++
}*/

/*let soma = 0
let numeros
while( numeros !== 0){
    numeros = Number(prompt("Digite um valor:")) 
    soma = numeros + soma
    alert("A soma dos números é:" + soma)
}*/

let array = [11,12,13,14,15,18]
let maiorValor = 0
for (let i = 0; i < 6; i++) {
   if (array[i] > maiorValor){
   maiorValor = array[i]
   }
}

alert(maiorValor)