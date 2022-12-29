class projetos{
  
  static divProjetos = "";
  static cardsProjeto = "";
  
  constructor(){
    this.divProjetos = document.querySelector('[data-conteudo="projetos"]');
    this.cardsProjeto = this.divProjetos.querySelectorAll('[data-conteudo-projetos="card-projeto"]');
    return;
  }
  
  exibirProjetos(linguagem, botao){
    this.ocultarCardsProjetos();
    
    linguagem = linguagem.toLowerCase();
    
    const cardsLinguagem = document.querySelectorAll(`[data-conteudo-projetos-linguagem-${linguagem}]`);
    cardsLinguagem.forEach(card => {
      card.style.display = 'grid';
    })
    
    this.ativarBotao(botao);
  }
  
  exibirTodosOsProjetos(botao){
    this.ocultarCardsProjetos();
    
    this.cardsProjeto.forEach(card => {
      card.style.display = 'grid';
    })
    
    this.ativarBotao(botao);
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