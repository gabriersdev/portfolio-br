import { projetos } from "./classes/projetos.js";
import { carregarPreview } from "./carregar/carregar-preview.js";
import { acoes } from "./carregar/carregar-eventos-auxiliar.js";

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
  
})();