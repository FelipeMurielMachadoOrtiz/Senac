/*function minhaFuncao(variavel) { // Vai multiplica o valor de 2 e 10 por 5. Se retira o console.log vai dar um erro
	return variavel * 5
}
console.log(minhaFuncao(2))
console.log(minhaFuncao(10))*/

/*let textoDoUsuario = prompt("Insira um texto"); 

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) // essa função vai tem a utilidade de dizer se o texto inserido vai ser true, ou false.Ele vai dá true pra a I,II, e a III vai ser false.*/

function infomações() {
    let nome = String(prompt("Digite seu nome:"))
    let idade = Number(prompt("digite sua idade:"))
    let local = String(prompt("Digite seu endereço:"))
    let profissão = String(prompt("Digite sua Profissão:"))
   console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${local} e sou ${profissão}`)
}
infomações()

