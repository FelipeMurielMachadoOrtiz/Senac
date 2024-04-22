
/*//DECLARAÇAO DAS VARIAVEIS
let nome 
let idade 
let anoNascimento
let anoAtual
let maiorIdade
let idade2050

//RECEBE VALORES
nome = prompt("Digite o seu nome")
anoNascimento = prompt("Digite a data do seu nascimento")
anoAtual = prompt("Digite o ano atual")

//CALCULA OS VALORES PEDIDOS
idade = anoAtual - anoNascimento
maiorIdade = idade >= 18 
idade2050 = 2050 - anoNascimento

//RESULTADO NA TELA 
alert(nome)
alert(idade)
alert(maiorIdade)
alert(idade2050)
*/
let nome

nome = prompt("Digite seu nome:")

let anoAtual
let anoNascimento
let idade

anoAtual = prompt("Digite o ano atual:")
anoNascimento = prompt("Digite o ano de nascimento:")
idade = anoAtual - anoNascimento
alert(idade)

let maiorIdade

maiorIdade = idade >= 18
alert(maiorIdade)

let idade2050

idade2050= 2050 - anoNascimento
alert(idade2050)

console.log("Oi!!" , "Meu nome é " , nome, "e eu tenho", idade, "anos" , 
"eu sou maior de idade" , maiorIdade, "e em 2050, terei", idade2050, "anos")