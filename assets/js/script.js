import { trocarTipoFeedbackModal } from "./modal.js";
import { controlarExibicaoModal } from "./modal.js";

import { limparFormulario } from "./formulario.js";

import { dadosProjetos } from "./conteudos.js";
import { cardProjeto } from "./cardProjeto.js";

import { projetos } from "./acoes/projetos.js";
import { linguagens } from "./acoes/linguagens.js";

import { ajustarPeriodoProgramando, ajustarIdade } from "./utilitarios.js";
import { acoes } from "./acoes/utilitarios.js";

(() => {
  
  $("#formulario").submit(function(evento){
    
    const dadosFormulario = {
      nome: $("[data-input-formulario=nome]").val(),
      email: $("[data-input-formulario=email]").val(),
      mensagem: $("[data-input-formulario=mensagem]").val(),
      chaveAPI : 'O840OE1590BOXAP59HANBOXAP4C80MJ69U9XX076XX0760B949XOX1NXX076KC690ARC75XOX1N99Z73ARC7539546XX07699Z73KKX40BOXAPXOX1NXX076XOX1N'
    }
    
    try{
      $.ajax({
        method: 'POST',
        url: 'https://gabriel-ribeiro.000webhostapp.com/index.php',
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: JSON.stringify({
          nome: $("[data-input-formulario=nome]").val(),
          email: $("[data-input-formulario=email]").val(),
          mensagem: $("[data-input-formulario=mensagem]").val(),
          chaveAPI : 'O840OE1590BOXAP59HANBOXAP4C80MJ69U9XX076XX0760B949XOX1NXX076KC690ARC75XOX1N99Z73ARC7539546XX07699Z73KKX40BOXAPXOX1NXX076XOX1N'
      }),
        dataType: 'json',
        encode: true,
        success: function(){}
      })
      
      .done(function (retorno){
        if(!retorno.email){
          const dadosPersonalizacao = {
            titulo: 'O e-mail não é válido', 
            descricao: 'Informe um e-mail válido para enviar a mensagem'
          };
          trocarTipoFeedbackModal("personalizado-erro", dadosPersonalizacao);
          controlarExibicaoModal(document.querySelector("#modal-feedback-formulario"), 'show');
        }else{
          trocarTipoFeedbackModal(retorno.situacao);
          controlarExibicaoModal(document.querySelector("#modal-feedback-formulario"), 'show');
          limparFormulario();
        }
        
      })
      
      .fail(function (retorno){
        trocarTipoFeedbackModal(false);
        console.log('Não foi possível enviar os dados informados. Entre em contato com o desenvolvedor através do e-mail devgabrielribeiro@gmail.com')
      })
    }catch{
      console.log('A mensagem não foi enviada. Por favor, contate o desenvolvedor.');
    }
    
    evento.preventDefault();
  });
  
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
  $(document).ready(function(){
    $('[data-bs-toggle="popover"]').popover();  
  });
  
  window.addEventListener("load", () => {
    const area = document.querySelectorAll("[data-ano-atual]");
    const dataAtual = new Date();
    
    area.forEach(element => {
      element.textContent = ` -  ${dataAtual.getFullYear()}`;
    });
  })
  
  const btnFecharModais = document.querySelectorAll("[data-bs-dismiss=modal]");
  btnFecharModais.forEach(elemento =>{
    if(acoes.modal){
      acoes.modal(elemento);
    };
  })
  
  ajustarIdade();
  ajustarPeriodoProgramando();
  
})();

dadosProjetos.forEach(projeto => {
  if(projeto.dificuldade == 3){
    const classeCard = new cardProjeto(projeto.titulo, projeto.linguagens, projeto.descricao, projeto.existeSaibaMais, projeto.tituloSaibaMais, projeto.saibaMais, projeto.link, projeto.dificuldade);
    classeCard.criarCard();
  }
});

dadosProjetos.forEach(projeto => {
  if(projeto.dificuldade == 2){
    const classeCard = new cardProjeto(projeto.titulo, projeto.linguagens, projeto.descricao, projeto.existeSaibaMais, projeto.tituloSaibaMais, projeto.saibaMais, projeto.link, projeto.dificuldade);
    classeCard.criarCard();
  }
});

dadosProjetos.forEach(projeto => {
  if(projeto.dificuldade == 1){
    const classeCard = new cardProjeto(projeto.titulo, projeto.linguagens, projeto.descricao, projeto.existeSaibaMais, projeto.tituloSaibaMais, projeto.saibaMais, projeto.link, projeto.dificuldade);
    classeCard.criarCard();
  }
});

const classeProjetos = new projetos();

const acoesCardsLinguagem = {
  php:botao => botao.addEventListener('click', evento => {window.location.replace('#projetos'); classeProjetos.exibirProjetos(botao.dataset.acaoCardLinguagem.toLowerCase(), document.querySelector(`[data-acao-projeto=${botao.dataset.acaoCardLinguagem.toLowerCase()}`))}),
  js:botao => botao.addEventListener('click', evento => {window.location.replace('#projetos'); classeProjetos.exibirProjetos(botao.dataset.acaoCardLinguagem.toLowerCase(), document.querySelector(`[data-acao-projeto=${botao.dataset.acaoCardLinguagem.toLowerCase()}`))}),
  css:botao => botao.addEventListener('click', evento => {window.location.replace('#projetos'); classeProjetos.exibirProjetos(botao.dataset.acaoCardLinguagem.toLowerCase(), document.querySelector(`[data-acao-projeto=${botao.dataset.acaoCardLinguagem.toLowerCase()}`))}),
  mysql:botao => botao.addEventListener('click', evento => {window.location.replace('#projetos'); classeProjetos.exibirProjetos(botao.dataset.acaoCardLinguagem.toLowerCase(), document.querySelector(`[data-acao-projeto=${botao.dataset.acaoCardLinguagem.toLowerCase()}`))}),
  html:botao => botao.addEventListener('click', evento => {window.location.replace('#projetos'); classeProjetos.exibirProjetos(botao.dataset.acaoCardLinguagem.toLowerCase(), document.querySelector(`[data-acao-projeto=${botao.dataset.acaoCardLinguagem.toLowerCase()}`))}),
  java:botao => botao.addEventListener('click', evento => {window.location.replace('#projetos'); classeProjetos.exibirTodosOsProjetos(document.querySelector('[data-acao-projeto="todos"'))}),
  git:botao => botao.addEventListener('click', evento => {window.location.replace('#projetos'); classeProjetos.exibirTodosOsProjetos(document.querySelector('[data-acao-projeto="todos"'))}),
  figma:botao => botao.addEventListener('click', evento => {window.location.replace('#projetos'); classeProjetos.exibirTodosOsProjetos(document.querySelector('[data-acao-projeto="todos"'))})
};

const botoesAcaoCardsLinguagem = document.querySelectorAll('[data-acao-card-linguagem]');
botoesAcaoCardsLinguagem.forEach(botao => {
  const linguagem = botao.dataset.acaoCardLinguagem.toLowerCase();
  if(acoesCardsLinguagem[linguagem]){
    acoesCardsLinguagem[linguagem](botao);
  }
})

const acoesProjetos = {
  todos:botao => botao.addEventListener("click", evento => {classeProjetos.exibirTodosOsProjetos(botao)}),
  php:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
  js:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
  css:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
  mysql:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
  html:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
}

const botoesAcaoProjetos = document.querySelectorAll("[data-acao-projeto]");
botoesAcaoProjetos.forEach(botao => {
  const nomeAcaoProjeto = botao.getAttribute("data-acao-projeto").toLowerCase();
  if(acoesProjetos[nomeAcaoProjeto]){
    acoesProjetos[nomeAcaoProjeto](botao)
  }
})

const classeLinguagens = new linguagens();

const acoesLinguagens = {
  todas:botao => botao.addEventListener("click", evento => {classeLinguagens.exibirTodasAsLinguagens(botao)}),
  front_end:botao => botao.addEventListener("click", evento => {classeLinguagens.exibirLinguagem(botao.getAttribute("data-acao-linguagens").toLowerCase(), botao)}),
  back_end:botao => botao.addEventListener("click", evento => {classeLinguagens.exibirLinguagem(botao.getAttribute("data-acao-linguagens").toLowerCase(), botao)}),
  programacao:botao => botao.addEventListener("click", evento => {classeLinguagens.exibirLinguagem(botao.getAttribute("data-acao-linguagens").toLowerCase(), botao)}),
  desenvolvimento_web:botao => botao.addEventListener("click", evento => {classeLinguagens.exibirLinguagem(botao.getAttribute("data-acao-linguagens").toLowerCase(), botao)}),
  ux_ui:botao => botao.addEventListener("click", evento => {classeLinguagens.exibirLinguagem(botao.getAttribute("data-acao-linguagens").toLowerCase(), botao)})
}

const botoesAcaoLinguagens = document.querySelectorAll("[data-acao-linguagens]");
botoesAcaoLinguagens.forEach(botao => {
  const nomeAcaoLinguagem = botao.getAttribute("data-acao-linguagens").toLowerCase();
  if(acoesLinguagens[nomeAcaoLinguagem]){
    acoesLinguagens[nomeAcaoLinguagem](botao)
  }
})

