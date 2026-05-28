// ======================================
// GAMEZONE - SCRIPT PRINCIPAL
// ======================================

// Mensagem ao carregar o site

document.addEventListener("DOMContentLoaded", function () {

    console.log("GameZone carregada com sucesso!");

});


// ======================================
// BOTÕES DE COMPRA
// ======================================

let botoesComprar = document.querySelectorAll(".btn-primary");

botoesComprar.forEach(function(botao){

    botao.addEventListener("click", function(){

        alert("Produto adicionado ao carrinho!");

    });

});


// ======================================
// FORMULÁRIO DE CONTATO
// ======================================

let formulario = document.querySelector("form");

if(formulario){

    formulario.addEventListener("submit", function(event){

        event.preventDefault();

        alert("Mensagem enviada com sucesso!");

        formulario.reset();

    });

}


// ======================================
// ANO AUTOMÁTICO NO RODAPÉ
// ======================================

let anoAtual = new Date().getFullYear();

console.log("Ano atual:", anoAtual);


// ======================================
// MENSAGEM DE BOAS-VINDAS
// ======================================

setTimeout(function(){

    console.log("Bem-vindo à GameZone!");

}, 2000);