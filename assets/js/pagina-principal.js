import { trocarTipoFeedbackModal, controlarExibicaoModal } from "./utilitarios/modal.js";

import { ajustarPeriodoProgramando, ajustarIdade, acoesModal, limparFormulario } from "./utilitarios/utilitarios.js";
import { carregarCardsPrincipal } from "./view/carregar-cards-principal.js";

import { acoes } from "./view/carregar-eventos-principal.js";

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
        url: 'https://gabriel-ribeiro.000webhostapp.com/assets/php/index.php',
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: dadosFormulario,
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
        controlarExibicaoModal(document.querySelector("#modal-feedback-formulario"), 'show');
        console.log('Não foi possível enviar os dados informados. Entre em contato com o desenvolvedor através do e-mail devgabrielribeiro@gmail.com')
      })
    }catch{
      trocarTipoFeedbackModal(false);
      controlarExibicaoModal(document.querySelector("#modal-feedback-formulario"), 'show');
      console.log('A mensagem não foi enviada. Por favor, contate o desenvolvedor.');
    }
    
    evento.preventDefault();
  });
  
  const btnFecharModais = document.querySelectorAll("[data-bs-dismiss=modal]");
  btnFecharModais.forEach(elemento =>{
    if(acoesModal.modal){
      acoesModal.modal(elemento);
    };
  })
  
  ajustarIdade();
  ajustarPeriodoProgramando();
  
})();

carregarCardsPrincipal();

const botoesAcaoCardsLinguagem = document.querySelectorAll('[data-acao-card-linguagem]');
botoesAcaoCardsLinguagem.forEach(botao => {
  const linguagem = botao.dataset.acaoCardLinguagem.toLowerCase();
  if(acoes.cardsLinguagem[linguagem]){
    acoes.cardsLinguagem[linguagem](botao);
  }
})

const botoesAcaoProjetos = document.querySelectorAll("[data-acao-projeto]");
botoesAcaoProjetos.forEach(botao => {
  const nomeAcaoProjeto = botao.getAttribute("data-acao-projeto").toLowerCase();
  if(acoes.btnProjetos[nomeAcaoProjeto]){
    acoes.btnProjetos[nomeAcaoProjeto](botao)
  }
})

const botoesAcaoLinguagens = document.querySelectorAll("[data-acao-linguagens]");
botoesAcaoLinguagens.forEach(botao => {
  const nomeAcaoLinguagem = botao.getAttribute("data-acao-linguagens").toLowerCase();
  if(acoes.btnlinguagens[nomeAcaoLinguagem]){
    acoes.btnlinguagens[nomeAcaoLinguagem](botao)
  }
})