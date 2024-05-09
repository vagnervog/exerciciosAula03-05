// Cria um parágrafo:
const container = document.getElementById('container');
const paragraph = document.createElement('p');
paragraph.textContent = 'Este parágrafo foi criado com JavaScript!';
container.appendChild(paragraph);

// Exibe uma lista de itens:
const lista = document.getElementById('minhaLista');
const dados = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
dados.forEach(function(item) {
    const novoItem = document.createElement('li');
    novoItem.textContent = item;
    lista.appendChild(novoItem);
});

// Cria o formulario --> AJUSTAR
const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const cidade = document.querySelector('#cidade');
const btnSalvar = document.querySelector('#btnSalvar');
const tbody = document.querySelector('#table tbody');

btnSalvar.onclick = (event) => {
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
    event.preventDefault();
    limparCampos();
    alert("Registro cadastrado com sucesso!");
  };

  function limparCampos() {
    nome.value = "";
    idade.value = "";
    cidade.value = "";
  }

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
  
  function loadItens() {
    items = getItensBDV();
    tbody.innerHTML = "";
    items.forEach((items, index) => {
      insertItem(items, index);
    });
  }

  const getItensBDV = () => JSON.parse(localStorage.getItem("db_cadastro")) ?? [];
  const setItensBDV = () => localStorage.setItem("db_cadastro", JSON.stringify(items));
  

// Exibe as imagens
/*const containerImagens = document.getElementById('container-imagens');

const imagens = [
    { src: 'imagem1.jpg', alt: 'Descrição da Imagem 1' },
    { src: 'imagem2.jpg', alt: 'Descrição da Imagem 2' },
    { src: 'imagem3.jpg', alt: 'Descrição da Imagem 3' },
    // Adicione mais imagens aqui...
];

imagens.forEach(imagem => {
    const novaImagem = document.createElement('img');
    novaImagem.src = imagem.src;
    novaImagem.alt = imagem.alt;

    containerImagens.appendChild(novaImagem);
});*/

        
