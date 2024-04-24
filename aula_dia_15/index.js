//Recebeu as variaveis
let nome = prompt('Digite seu nome:')
let idade = prompt('Digite sua idade:')
let horasTrabalho = prompt("digite as horas que voce trabalho por dia:")
let salarioDia = prompt('Digite o seu salario diario:')
//verificando as variaveis
console.log(typeof nome)
console.log(typeof horasTrabalho)
console.log(typeof salarioDia)
//convertendo o que e necessario
let horasTrabNumber = Number(horasTrabalho)
let salDiaNumber = Number(salarioDia)
//processando valores
let valorHoraNumber = horasTrabNumber/salDiaNumber 
let valorHora = String(valorHoraNumber)
const mensagem = "Seu Valor Hora é:" + valorHora + '!!!'
//verificando as variaveis
console.log(typeof valorHora)
console.log(typeof mensagem)
console.log(mensagem)
//saida de valores para front end
alert(mensagem)