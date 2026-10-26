const express = require("express");

const app = express();

const PORT = 3000;

const livros = [
  { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, disponivel: true },
  { id: 2, titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1890, disponivel: false },
  { id: 3, titulo: "Capitães da Areia", autor: "Jorge Amado", ano: 1937, disponivel: true },
  { id: 4, titulo: "Vidas Secas", autor: "Graciliano Ramos", ano: 1938, disponivel: true },
  { id: 5, titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", ano: 1881, disponivel: false },
];

app.get("/", (req, res) => {
  res.send("📚 API da Biblioteca funcionando!");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  const id = Number(req.params.id);

  const livro = livros.find((l) => l.id === id);

  if (!livro) {
    return res.status(404).json({
      mensagem: `Livro com id ${req.params.id} não encontrado.`,
    });
  }

  res.status(200).json(livro);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});



// 1. Qual é a função do Node.js nessa aplicação?
// R: Fazer o JavaScript rodar fora do navegador, direto no computador.
//    Sem o Node, não teríamos como criar o servidor.
//    (Analogia: é o prédio e a energia do restaurante.)

// 2. Qual é a diferença entre Node.js e Express?
// R: O Node.js é a base que executa o código.
//    O Express é uma ferramenta em cima do Node que facilita criar rotas.
//    (Analogia: Node é a cozinha, Express é o garçom que organiza os pedidos.)

// 3. Por que o array está simulando um banco de dados?
// R: Porque ele guarda os livros e entrega quando alguém pede,
//    igual um banco de dados faria.
//    Mas é de mentirinha: fica só na memória e some quando o programa para.

// 4. Qual é a finalidade do método GET em uma API?
// R: Buscar (consultar) informações, sem mudar nada.
//    (Analogia: olhar o cardápio, sem pedir nem cancelar nada.)

// 5. (A questão 5 não apareceu no enunciado. Se existir no seu material,
//    me mande que eu respondo!)

// 6. Qual é a diferença entre os códigos HTTP 200 e 404?
// R: 200 = deu certo, o livro foi encontrado.
//    404 = não encontrado, o livro pedido não existe.

// 7. Qual é a vantagem de utilizar o Nodemon?
// R: Ele reinicia o servidor sozinho toda vez que você salva o código.
//    Sem ele, você teria que parar e ligar o servidor de novo a cada mudança.

// 8. Se o servidor for encerrado, os dados alterados no array continuam armazenados?
// R: NÃO.
//    O array fica só na memória enquanto o programa roda.
//    Quando o servidor fecha, tudo volta ao que está escrito no código.
//    Para guardar de verdade, é preciso um banco de dados real.