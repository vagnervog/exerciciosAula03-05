// Cria um parágrafo:
const container = document.getElementById('container');

const paragraph = document.createElement('p');
paragraph.textContent = 'Este parágrafo foi criado com JavaScript!';

container.appendChild(paragraph);

// Exibe uma lista de itens:
const lista = document.getElementById('minhaLista');

const itens = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

itens.forEach(function(item) {
    const novoItem = document.createElement('li');
    novoItem.textContent = item;

    lista.appendChild(novoItem);
});

// Cria uma tabela:
const corpoTabela = document.getElementById('corpoTabela');

const dados = [
    { nome: 'João', idade: 30, cidade: 'Rio de Janeiro' },
    { nome: 'Maria', idade: 25, cidade: 'São Paulo' },
    { nome: 'Pedro', idade: 40, cidade: 'Belo Horizonte' },
    // Adicione mais dados aqui...
];

// Função para criar uma linha da tabela
function criarLinha(dados) {
  const linha = document.createElement('tr');

  for (const propriedade in dados) {
    const valor = dados[propriedade];
    const celula = document.createElement('td');
    celula.textContent = valor;
    linha.appendChild(celula);
  }

  return linha;
}

// Popula a tabela com os dados
dados.forEach(function(dado) {
  const novaLinha = criarLinha(dado);
  corpoTabela.appendChild(novaLinha);
});

// Cria o formulario --> AJUSTAR
const formulario = document.getElementById('meuFormulario');

const campos = [
    {
        tipo: 'text',
        nome: 'nome',
        label: 'Nome Completo:',
        placeholder: 'Digite seu nome completo'
    },
    {
        tipo: 'email',
        nome: 'email',
        label: 'E-mail:',
        placeholder: 'Digite seu e-mail'
    },
    {
        tipo: 'select',
        nome: 'cidade',
        label: 'Cidade:',
        opcoes: [
            { valor: 'rio-de-janeiro', texto: 'Rio de Janeiro' },
            { valor: 'sao-paulo', texto: 'São Paulo' },
            { valor: 'belo-horizonte', texto: 'Belo Horizonte' }
        ]
    },
    {
        tipo: 'submit',
        valor: 'Enviar Formulário'
    }
];

function criarCampo(campo) {
    const novoCampo = document.createElement(campo.tipo === 'select' ? 'select' : 'input');
    novoCampo.name = campo.nome;

    if (campo.tipo === 'text' || campo.tipo === 'email') {
        novoCampo.type = campo.tipo;
        novoCampo.placeholder = campo.placeholder;
    } else if (campo.tipo === 'select') {
        campo.opcoes.forEach(opcao => {
            const novaOpcao = document.createElement('option');
            novaOpcao.value = opcao.valor;
            novaOpcao.textContent = opcao.texto;
            novoCampo.appendChild(novaOpcao);
        });
    }
}

// Exibe as imagens
const containerImagens = document.getElementById('container-imagens');

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
});

        
