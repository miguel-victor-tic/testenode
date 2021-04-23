const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send(
        "<h1>Bem vindo ao meu site!</h1>" +
         "<hr>" +
         "<h2>- 1810510 - Miguel Victor</h2>");
})

//rota pra cadastrr produto
app.get("/produtos", function(req,res){
    res.send("<h1>Lista de produtos teste 2</h1>");
})

app.listen(3009,function(erro){  // cria a aplicação na porta 3001
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})