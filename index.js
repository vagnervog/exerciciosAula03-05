const nome = document.querySelector('#nomeCompleto');
const idade = document.querySelector('#idade');
const cidade = document.querySelector('#cidade');
const tbody = document.querySelector('#table tbody');
const btnSalvar = document.querySelector('#bntSalvar');

// Cria um parágrafo:
const container = document.getElementById('container');
const paragraph = document.createElement('p');
paragraph.textContent = 'Cadastro De Pessoas';
container.appendChild(paragraph);

// Exibe uma lista de itens:
const lista = document.getElementById('minhaLista');
const dados = ['> Nome completo', '> Idade', '> Cidade'];
dados.forEach(function(item) {
    const novoItem = document.createElement('li');
    novoItem.textContent = item;
    lista.appendChild(novoItem);
});

// Função para o botão salvar - ação de click do mouse
btnSalvar.onclick = (event) => {
    event.preventDefault();
  // Validar dados - se campos estão preenchidos
  if (!nome.value || !idade.value || !cidade.value) {
    alert('Preencha todos os campos!');
    return;
  }
  // Adiciona os valores ao array
  items.push({
    nome: nome.value,
    idade: idade.value,
    cidade: cidade.value,
  });
  setItensBDV();
  loadItens();
  limparCampos();
  alert("Registro cadastrado com sucesso!");
};

// Limpa os campos
function limparCampos() {
  nome.value = "";
  idade.value = "";
  cidade.value = "";
}

// Seta os dados na tabela de vagas
function insertItem(items, index) {
  let tr = document.createElement("tr");
  // Cria a tabela HTML
  tr.innerHTML = `
      <td>${items.nome}</td>
      <td>${items.idade}</td>
      <td>${items.cidade}</td>
    `;
  tbody.appendChild(tr);
}

// Carrega na tabela os itens salvos no json
function loadItens() {
  items = getItensBDV();
  tbody.innerHTML = "";
  items.forEach((items, index) => {
    insertItem(items, index);
  });
}

// Armazena os dados no localStorage atraves de um json
const getItensBDV = () => JSON.parse(localStorage.getItem("db_registros")) ?? [];
const setItensBDV = () => localStorage.setItem("db_registros", JSON.stringify(items));

//Inicia a tela carregando os dados armazenados no localStorage nas tabelas
//loadItens();


