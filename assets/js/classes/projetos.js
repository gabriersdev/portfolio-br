import { controlarNenhumProjeto } from "../utilitarios/utilitarios.js";

class projetos{
  
  static divProjetos = "";
  static cardsProjeto = "";
  
  constructor(tipoDisplay){
    
    tipoDisplay == undefined ? this.tipoDisplay = 'grid' : this.tipoDisplay = tipoDisplay;
    
    this.divProjetos = document.querySelector('[data-conteudo="projetos"]');
    this.cardsProjeto = this.divProjetos.querySelectorAll('[data-conteudo-projetos="card-projeto"]');
    return;
  }
  
  exibirProjetos(linguagem, botao){
    this.ocultarCardsProjetos();
    
    linguagem = linguagem.toLowerCase();
    let existemProjetos = false;
    
    const cardsLinguagem = document.querySelectorAll(`[data-conteudo-projetos-linguagem-${linguagem}]`);
    cardsLinguagem.forEach(card => {
      existemProjetos = true;
      card.style.display = this.tipoDisplay;
    })
    
    this.exibicaoNenhumProjeto(!existemProjetos);
    this.ativarBotao(botao);
  }
  
  exibirProjetoSelecionado(id){
    id = id.toString();

    this.ocultarCardsProjetos();
    this.desativarTodosOsBotoes();
    
    let existemProjetos = false;

    this.cardsProjeto.forEach(card => {
      if(card.dataset.projetoId == id){
        existemProjetos = true;
        card.style.display = this.tipoDisplay;
      }
    })

    this.exibicaoNenhumProjeto(!existemProjetos);
  }
  
  exibirTodosOsProjetos(botao){
    this.ocultarCardsProjetos();
    let existemProjetos = false;

    this.cardsProjeto.forEach(card => {
      existemProjetos = true;
      card.style.display = this.tipoDisplay;
    })
    
    this.exibicaoNenhumProjeto(!existemProjetos);
    this.ativarBotao(botao);
  }
  
  exibicaoNenhumProjeto(condicao){
    controlarNenhumProjeto(condicao)
  }

  ocultarCardsProjetos(){
    this.cardsProjeto.forEach(card => {
      card.style.display = 'none';
    });
  }
  
  ativarBotao(botao){
    this.desativarTodosOsBotoes();
    
    try{
      botao.classList.contains('ativo') ? "" : botao.classList.add('ativo');
    }catch{}
  }
  
  desativarTodosOsBotoes(){
    const botoes = document.querySelectorAll('[data-acao-projeto]');
    botoes.forEach(botao => {
      botao.classList.contains('ativo') ? botao.classList.remove('ativo') : "";
    })
  }
}

export{
  projetos
}