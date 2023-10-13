class linguagens{

  static divLinguagens = "";
  static cardsLinguagem = "";

  constructor(){
    this.divLinguagens = document.querySelector('[data-conteudo="linguagens"]');
    this.cardsLinguagem = document.querySelectorAll('[div-conteudo-linguagens="card-linguagem"]');
    return;
  }

  exibirLinguagem(area, botao){
    this.ocultarCardsLinguagens();

    area = area.toLowerCase();

    const cardsDescricaoLinguagem = document.querySelectorAll(`[data-conteudo-linguagem-${area}]`);
    cardsDescricaoLinguagem.forEach(card => {
      card.style.display = 'grid';
    })
    
    this.ativarBotao(botao);
  }

  exibirTodasAsLinguagens(botao){
    this.ocultarCardsLinguagens();
    this.desativarTodosOsBotoes();

    this.cardsLinguagem.forEach(card => {
      card.style.display = 'grid';
    })

    this.ativarBotao(botao);
  }

  ativarBotao(botao){
    this.desativarTodosOsBotoes();

    try{
      botao.classList.contains('ativo') ? "" : botao.classList.add('ativo');
    }catch{
      
    }
  }

  ocultarCardsLinguagens(){
    this.cardsLinguagem.forEach(card => {
      card.style.display = 'none';
    })
  }

  desativarTodosOsBotoes(){
    const botoes = document.querySelectorAll('[data-acao-linguagens]');
    botoes.forEach(botao => {
      botao.classList.contains('ativo') ? botao.classList.remove('ativo') : "";
    })
  }

}

export{
  linguagens
}