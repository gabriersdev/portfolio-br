import { projetos } from "./classes/projetos.js";
import { carregarPreview } from "./carregar/carregar-preview.js";
import { acoes } from "./carregar/carregar-eventos-auxiliar.js";
import { controleFechamentoModal } from "./utilitarios/modal.js";

(() => {

  const btnPreview = document.querySelectorAll('[data-btn-preview]');
  btnPreview.forEach(btn => {
    btn.addEventListener('click', (evento) => {
      carregarPreview(btn);
    })
  })
  
  const classeProjetos = new projetos('inline-block');
  
  const botoesAcaoProjetos = document.querySelectorAll("[data-acao-projeto]");
  botoesAcaoProjetos.forEach(botao => {
    const nomeAcaoProjeto = botao.getAttribute("data-acao-projeto").toLowerCase();
    if(acoes.acoesProjetos[nomeAcaoProjeto]){
      acoes.acoesProjetos[nomeAcaoProjeto](botao)
    }
  })

  window.addEventListener('load', () => {
    const modalPreviews = ` <div class="modal fade" id="modal-exibicao-preview" tabindex="-1" aria-labelledby="modal-exibicao-preview-label" aria-hidden="true"> <div class="modal-dialog modal-xl"> <div class="modal-content modal-estilo"> <div class='modal-header'> <h5 class='modal-title' id=''></h5> <button data-modal-fecha><i class='bi bi-x-lg'></i></button> </div> <div class="modal-body modal-exibicao-preview__corpo"> <div class="spinner-border text-secondary modal-exibicao-preview__corpo__spinner" role="status"> <span class="sr-only"></span> </div> <iframe src="" class="modal-exibicao-preview__corpo__iframe" frameborder="0" sandbox="allow-same-origin allow-forms allow-modals allow-popups allow-scripts"> </iframe> </div> </div> </div> </div>`;
    const areaImportacao = document.querySelector('[data-area-importacao]');

    areaImportacao !== null ? areaImportacao.innerHTML += modalPreviews : '';
    controleFechamentoModal();
  })
  
})();