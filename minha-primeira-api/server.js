const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

function itauna(request, response) {
    const URL = url.parse(request.url, true)
    const filepath = path.join(__dirname, "..", "mock", "alunos.json")//aqui foi usado o .. para retornar a pasta anterior para localizar a poasta fora do arquivos!

    if (request.method === "GET" && URL.pathname === "/") { //metodo de requisiçao GET
        response.writeHead(200, { "Content-Type": "text/plain" })
        response.end("Olá Mundo!")
        return;
    }

        (request.method === "GET" && URL.pathname === "/alunos") {
            //receber dados do body d requisiçao
            //verificar se os dados "nome" e "idade" existem
            //criar um numero aleatorio 1 a 1000
            //criar um objeto contendo ID, nome, idade
            //Vai salvar eçe dentro do mock "ALUNOS"

            //caso der erro ,  devolva
            //se der sucesso devolva o objetivo criando!
        }


    if (request.method === "GET" && URL.pathname === "/alunos") {
        fs.readFile(filepath, "utf8", (err, data) => {
            if (err) {
                console.error(err);
                response.writeHead(500, { "Content-Type": "text/plain" })
                response.end(JSON.stringify({ error: "Erro ao ler o arquivo" }));
                return;
            }

            response.writeHead(200, { "Content-Type": "application/json" })
            return response.end(data);
            
        });
        return

    }
    response.writeHead(404, { "Content-Type": "text/plain" })
    response.end("Rota nao lozalizada");
}

const server = http.createServer(itauna)

server.listen(3000, () => console.log("servidor rodando!"));


//ATIVIDADE PARA CASA
// criar uma rota de criaçao, criando um novo objeto aluno com ID aleatorio, nome, e IDADE