// Módulos nativos
const http = require("http");
const url = require("url");
// Módulos criados
const petshhop = require("./petshop");

http.createServer((request, response)=>{

    let urlCompleta = url.parse(request.url, true)

    if (urlCompleta.pathname == "/") {
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.write("Você está na página inicial")
        response.end()
    }

    if (urlCompleta.pathname == "/home") {
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.write("Você está dentro do Sistema Pet Shop ")
        response.end() 
    }

    if (urlCompleta.pathname == "/pet/adicionar") {
        petshhop.adicionarPet(urlCompleta.query.nome)
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.end("O pet foi cadastrado com sucesso!")}
    else {
        response.writeHead(401, {'Content-Type': 'text/html; charset=utf-8'});
        response.end("Erro ao cadastrar pet!")
    }
}).listen(3000, "localhost")

/*
Outra forma de declarar

let server = http.createServer((request, response)=>{
    console.log(request)
})

server.listen(3000, "localhost")

*/

