// Esta função imprime o menu de opções para o usuário
function imprimeMenu() {
    let mensagem = "";
    mensagem += "****\n";
    mensagem += "DIGITE UM DOS NÚMEROS ABAIXO, CONFORME SUA ESCOLHA:\n";
    mensagem += "****\n";
    mensagem += "1- Cadastro de doador\n";
    mensagem += "2- Listar doadores\n";
    mensagem += "3- Buscar doadores por tipo sanguíneo\n";
    mensagem += "4- Buscar doadores por data\n";
    mensagem += "5- Sair\n";
    mensagem += "***";
  
    // Solicita ao usuário que escolha uma opção e retorna o número escolhido
    let opcao = Number(prompt(mensagem));
    return opcao;
  }

  // Esta função permite ao usuário cadastrar um novo doador
  function cadastrarDoador(){  
  let numeroDoadores = 1;
    for (let i = 0; i < numeroDoadores; i++) {
        const nome = prompt(`Digite o nome do doador: `);
        const idade = parseInt(prompt( `Digite a idade do doador ${nome}: `));
        const peso = parseFloat(prompt( `Digite o peso do doador ${nome}: `));
        const tipoSanguineo = prompt( `Digite o tipo sanguíneo do doador ${nome}: `);
        const ultimaDoacao = prompt( `Digite a última data de doação do doador ${nome} (Formato: DD/MM/AAAA): `);

        doadores.push({nome, idade, peso, tipoSanguineo, ultimaDoacao});
    } 
  }
  // Array de doadores pré-existentes
  let doadores = [
    { nome: 'João da Silva', idade: 25, peso: 70, tipoSanguineo: 'AB-', ultimaDoacao: '01/01/2022' },
    { nome: 'Maria Santos', idade: 35, peso: 65, tipoSanguineo: 'A+', ultimaDoacao: '03/02/2022' },
    { nome: 'Jose Almeida', idade: 45, peso: 80, tipoSanguineo: 'O+', ultimaDoacao: '10/01/2022' },
    { nome: 'Ana Oliveira', idade: 27, peso: 58, tipoSanguineo: 'B-', ultimaDoacao: '22/04/2022' },
    { nome: 'Carlos Silva', idade: 30, peso: 75, tipoSanguineo: 'A-', ultimaDoacao: '14/03/2022' }
  ];
  
  // Esta função lista todos os doadores com suas informações
  function listarDoadores(doadoresArray) {
    console.log("Lista de Doadores:");
    doadoresArray.forEach(function(doador, index) {
      console.log( `Doador ${index + 1}: `);
      console.log( `Nome: ${doador.nome} `);
      console.log( `Idade: ${doador.idade} `);
      console.log( `Peso: ${doador.peso} `);
      console.log( `Tipo Sanguíneo: ${doador.tipoSanguineo} `);
      console.log( `Última Doação do Ano: ${doador.ultimaDoacao} `);
      console.log("------------------------");
    });
  }
  // Esta função busca doadores por tipo sanguíneo
  function encontrarDoadoresPorTipoSanguineo() {
    function filtrarPorTipoSanguineo(doadores, tipoSanguineoDesejado) {
        return doadores.filter(doador => doador.tipoSanguineo === tipoSanguineoDesejado);
    }
  
    // Simulando entrada do usuário
    const tipoSanguineoDesejado = prompt("Digite o tipo sanguíneo desejado (ex: A+):");
  
    const doadoresFiltrados = filtrarPorTipoSanguineo(doadores, tipoSanguineoDesejado);
  
    if (doadoresFiltrados.length > 0) {
        console.log( `Doadores com tipo sanguíneo ${tipoSanguineoDesejado}: `);
      
    doadoresFiltrados.forEach(doador => 
      console.log(doador.nome));;
      doadoresFiltrados.forEach(doador => 
        console.log(doador.idade + " anos"));;
      doadoresFiltrados.forEach(doador => 
        console.log(doador.peso + " Kg"));;
      doadoresFiltrados.forEach(doador => console.log(doador.tipoSanguineo));;
      doadoresFiltrados.forEach(doador => console.log("Última doação: " + doador.ultimaDoacao));;
    } 
    else {
        console.log( `Nenhum doador encontrado com tipo sanguíneo ${tipoSanguineoDesejado}. `);
    }
  }

 // Essa função busca pela data de ultima doação
 function encontrarUltimaDoacao() {
    function filtrarPorUltimaDoacao(doadores, encontrarUltimaDoacao) {
    return doadores.filter(doador => doador.ultimaDoacao === encontrarUltimaDoacao);
    };
    // Simulando entrada do usuario
    const encontrarUltimaDoacao = prompt("Digite a data da última doação:(ex:10/01/2022)");

    const doadoresEncontrados = filtrarPorUltimaDoacao(doadores, encontrarUltimaDoacao);

    if (doadoresEncontrados.length > 0) {
        console.log (`Data da última doação ${encontrarUltimaDoacao}:`);

    doadoresEncontrados.forEach(doador =>
     console.log(doador.nome));
     doadoresEncontrados.forEach(doador => 
        console.log(doador.idade + " anos"));
     doadoresEncontrados.forEach(doador =>
        console.log(doador.peso + " Kg"));
     doadoresEncontrados.forEach(doador => console.log(doador.tipoSanguineo));
     doadoresEncontrados.forEach(doador => console.log("Última doação:" + doador.ultimaDoacao));
    }
    else {
        console.log(`Nenhum doador encontrado por data de doação ${encontrarUltimaDoacao}. `);
    };

 };
  
  // Esta função representa o menu principal do programa
  function menu() {
    let option = 0;
    while (option !== 5) {
      // Exibe o menu e obtém a opção escolhida pelo usuário
      option = imprimeMenu();
      switch (option) {
        case 1:
          cadastrarDoador(doadores); // Chama a função de cadastro de doador
          break;
        case 2:
          listarDoadores(doadores); // Chama a função de listar doadores
          break;
        case 3:
          encontrarDoadoresPorTipoSanguineo(doadores); // Chama a função de buscar doadores por tipo sanguíneo
          break;
        case 4: encontrarUltimaDoacao(doadores); // Chama a função de buscar doadores pela última doação 
          break;
        case 5:
          console.log("PROGRAMA ENCERRADO")
          break;
      }
    }
  }
  // Chama a função para iniciar o programa
  menu();