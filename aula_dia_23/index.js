/*let number1 = true
let number2 = false


number1 = prompt("Digite um número")
number2 = prompt("Digite um número")

if (number1 == number2){
    console.log("SUCESSO!!! SÃO IGUAIS!!!")
}else if (number1 != number2) {
    console.log("WTF??? SÃO DIFERENTES!!!")
}if (number1 > number2) {
    console.log("Number one é maior que o number two!!!")
}else if (number1 < number2){
    console.log("Number one é menor que o number two")
}*/

/*let pokemonEscolhido = prompt("Escolher um pokemon Inicial:(Bulbasauro, Charmander, Squirtle.")

let pokemons = pokemonEscolhido
switch (pokemons) {
    case "Bulbasauro":
        alert("Planta e Veneno")
        break
    case "Charmander":
        alert("Fogo")
        break
    case "Squirtle":
        alert("Água")
        break
    default:
        alert("BUG NO GAME!!! REINICIAR O GAME!!!")
}*/

/*let informacao1 = prompt("Você tem +18 anos?")
let informacao2 = prompt("Concluio o ensino médio?")
let informacao3 = prompt("Faz outra faculdade?")

if (informacao1 == "sim" && (informacao2 == "sim") && (informacao3 == "não")) {
    alert("Parabens, você pode entra na facudadel!!!")
}else {
    alert("Perdão, mas você não pode fazer faculdade.")
}*/

/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
// vai testa se um número é divisivel por 2  e se seu resultado final  vai ser igual a zero
// os tipos pares que são divisiveis até o final por 2, que o resultado vai ser 0 
// para os números ímpares que não vai ser divisivel até o final por 2 e ser igual a 0*/

/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//para dar o valor  da fruta que tu escolhe da lista no switch
//O preço da fruta maçã  é R$2.25
//O preço da fruta pêra é R$5*/

/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
//está pedindo para que digite um número do tipo number 
//esse número passou no teste.vai dá erro(nao vai aparecer nada)
//eu creio que havera um erro pq nao vai compreender o let*/

/*let idade = Number(prompt("Qual e a sua idade?"))

if (idade >= 18) {
  alert("voce pode dirgir.")
}else {
  alert("voce nao pode dirigir.")
}*/

/*let turno = prompt("Qual turno do  dia voce estuda? Digite M para matutuino, V para vespertino ou N para noturno")

if (turno === "M") {
alert("Bom Dia!")
}else if (turno === "V") {
  alert("Boa Tarde!")
}else if (turno === "N"){
  alert("Boa Noite!")
}else  {
  alert("Nem estuda o vagabundo!!!")
}*/

/*let turno = prompt("Qual turno do  dia voce estuda? Digite M para matutuino, V para vespertino ou N para noturno")

switch(turno){
  case "M":
    alert("Bom Dia!")
    break
  case "V":
    alert("Boa Tarde!")
    break
  case "N":
    alert("Boa Noite!")
    break
    default:
      alert("Nem estuda o vagabundo!!!")

}*/

/*let generoDoFilme = prompt("Qual genero do filme que voces vao assistir?")
let precoDoIngresso = Number(prompt("Qual o preco do ingresso?"))

if (generoDoFilme === "fantasia" && precoDoIngresso < 15){
  alert("Bom filme!")
}else {
  alert("Perdao, mas escolha outro filme!")
}*/