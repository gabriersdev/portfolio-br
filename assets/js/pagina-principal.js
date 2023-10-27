import { trocarTipoFeedbackModal, controlarExibicaoModal } from "./utilitarios/modal.js";
import { ajustarPeriodoProgramando, ajustarIdade, acoesModal, limparFormulario, isEmpty } from "./utilitarios/utilitarios.js";
import { carregarCardsPrincipal } from "./carregar/carregar-cards-principal.js";
import { carregarPreview } from "./carregar/carregar-preview.js";
import { acoes } from "./carregar/carregar-eventos-principal.js";
import { pesquisarProjeto } from './interacao/pesquisa-projetos.js';
import { carregarQuantidadeProjetosLinguagem } from './carregar/carregar-quantidade-projetos-linguagem.js';
import { controleFechamentoModal } from "./utilitarios/modal.js";
import { destaques } from "./conteudo/conteudos.js";

(() => {
  
  $(document).ready(() => {
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
    
    pesquisarProjeto(carregarCardsPrincipal());
    carregarQuantidadeProjetosLinguagem();
    ajustarIdade();
    ajustarPeriodoProgramando();
  })
  
  window.addEventListener('load', () => {
    const modalPreviews = ` <div class="modal fade" id="modal-exibicao-preview" tabindex="-1" aria-labelledby="modal-exibicao-preview-label" aria-hidden="true"> <div class="modal-dialog modal-xl"> <div class="modal-content modal-estilo"> <div class='modal-header'> <h5 class='modal-title' id=''></h5> <button data-modal-fecha><i class='bi bi-x-lg'></i></button> </div> <div class="modal-body modal-exibicao-preview__corpo"> <div class="spinner-border text-secondary modal-exibicao-preview__corpo__spinner" role="status"> <span class="sr-only"></span> </div> <iframe src="" class="modal-exibicao-preview__corpo__iframe" frameborder="0" sandbox="allow-same-origin allow-forms allow-modals allow-popups allow-scripts"> </iframe> </div> </div> </div> </div>`;
    const areaImportacao = document.querySelector('[data-area-importacao]');
    
    areaImportacao !== null ? areaImportacao.innerHTML += modalPreviews : '';
    controleFechamentoModal();
    
    // Carregando projetos em destaque
    let destaque;
    for (destaque of destaques.filter((projeto) => projeto.visible === true)){
      let linkIMG = destaque.link
      if(destaque.desployInGitHub){
        linkIMG = 'https://opengraph.githubassets.com/ef53dcba7698452627f8f6de5c034e97d2ccfa86964ede2c7c48527de0f8fcbb/gabrieszin/' + destaque.link.split('/')[isEmpty(destaque.link.split('/').length - 2) ? destaque.link.split('/').length - 1 : destaque.link.split('/').length - 2]
      }
      
      $('#projetos-destaque').append(`<div class="projeto-destaque"><div class="projeto-destaque--imagem" style="--img: url(${linkIMG})"></div><div class="projeto-destaque--conteudo"><h4 class="titulo">${destaque.title}</h4><p class="descricao">${destaque.resume}</p><a class="btn" href="${destaque.link}" target="_blank" rel="noreferrer noopener"><span>Ver projeto</span></a></div></div>`)
    }
    
    const botoesAcaoCardsLinguagem = document.querySelectorAll('[data-acao-card-linguagem]');
    botoesAcaoCardsLinguagem.forEach(botao => {
      const linguagem = botao.dataset.acaoCardLinguagem.toLowerCase();
      if(acoes.cardsLinguagem[linguagem]){
        acoes.cardsLinguagem[linguagem](botao);
      }
    })
    
    const btnPreview = document.querySelectorAll('[data-btn-preview]');
    btnPreview.forEach(btn => {
      btn.addEventListener('click', (evento) => {
        carregarPreview(btn);
      })
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
  })
  
})();