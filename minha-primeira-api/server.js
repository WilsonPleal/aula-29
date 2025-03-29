const http = require("http"); // aqui será
const url = require("url");
const path = require("path");
const fs = require("fs"); // biblioteca usada tbm no phiton

function itauna(request, response) {
  //Aqui esta sendo feito uma requisiçao e uma resposta pra essa funçao!
  const URL = url.parse(request.url, true); // aqui  e uma requisiçao
  const filepath = path.join(__dirname, "..", "mock", "alunos.json"); //aqui foi usado o .. para retornar a pasta anterior para localizar a pasta fora do arquivos!

  if (request.method === "GET" && URL.pathname === "/") {
    //metodo de requisiçao GET // requisiçao de caminho!
    response.writeHead(200, { "Content-Type": "text/plain" });
    return response.end("Jhon me mama!");
  }

  if (request.method === "GET" && URL.pathname === "/alunos") {
    //receber dados do body d requisiçao
    //verificar se os dados "nome" e "idade" existem
    //criar um numero aleatorio 1 a 1000
    //criar um objeto contendo ID, nome, idade
    //Vai salvar eçe dentro do mock "ALUNOS"
    //caso der erro ,  devolva
    //se der sucesso devolva o objetivo criando!
  }

  if (request.method === "GET" && URL.pathname === "/alunos") {
    fs.readFile(filepath, "utf-8", (err, data) => {
      // aqui sera lido o arquivo utf8
      if (err) {
        console.error(err); //sera mostrado ao usuario o ERROR para o mesmo arrumar!
        response.writeHead(500, { "Content-Type": "text/plain" });
        response.end(JSON.stringify({ error: "Erro ao ler o arquivo" }));
        return;
      }

      response.writeHead(200, { "Content-Type": "application/json" });
      return response.end(data);
    });
    return;
  }
  response.writeHead(404, { "Content-Type": "text/plain" });
  response.end("Rota nao lozalizada");
}

const server = http.createServer(itauna);
const port = 3000;

server.listen(port, () => console.log(`servidor rodando na porta: ${port}!`));

//ATIVIDADE PARA CASA
// criar uma rota de criaçao, criando um novo objeto aluno com ID aleatorio, nome, e IDADE
