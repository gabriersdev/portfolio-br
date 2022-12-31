class cardProjeto{
    
  //Parâmetros para serem recebidos: titulo, linguagensProjeto (virá em array), textoDescricao, existeTextoAlternativo, tituloTextoAlternativo, textoAlternativo, URLProjeto, nivelDificuldade ==> Alguns atributos de parâmetro são necessários outros não
  //Definição das variáveis e seus valores usadas para criar um card na seção projetos
  constructor(titulo, linguagensProjeto, textoDescricao, existeTextoAlternativo, tituloTextoAlternativo, textoAlternativo, URLProjeto, nivelDificuldade) {
    this.div = document.querySelector('[data-conteudo="projetos"]');
    
    this.titulo = titulo;
    this.linguagensProjeto = linguagensProjeto;

    this.textoDescricao = textoDescricao;
    
    this.existeTextoAlternativo = existeTextoAlternativo;
    this.tituloTextoAlternativo = tituloTextoAlternativo;
    this.textoAlternativo = textoAlternativo;
    
    this.URLProjeto = URLProjeto;

    this.nivelDificuldade = nivelDificuldade;
    
    switch (this.nivelDificuldade){
      case 1:
      this.dificuldadeTexto = 'Fácil';
      this.dificuldade = 'Facil';
      break;
      
      case 2:
      this.dificuldadeTexto = 'Médio';
      this.dificuldade = 'Medio';
      break;
      
      case 3:
      this.dificuldadeTexto = 'Difícil'
      this.dificuldade = 'Dificil';
      break;
    }
    
  }
  
  criarMarcador(){
    const marcador = document.createElement('i');
    marcador.classList.add('card-projeto__marcador');

    return marcador;
  }
  
  criarCabecalho(){
    const tituloProjeto = document.createElement('h2');
    tituloProjeto.classList.add('card-projeto__cabecalho__titulo');
    tituloProjeto.textContent = (this.titulo).substr(0, 25);
    
    const cabecalhoProjeto = document.createElement('div');
    cabecalhoProjeto.classList.add('card-projeto__cabecalho');
    cabecalhoProjeto.appendChild(tituloProjeto); 
    
    return cabecalhoProjeto;
  }
  
  criarCorpo(){
    const descricaoProjeto = document.createElement('p');
    descricaoProjeto.classList.add('card-projeto__corpo__descricao');
    descricaoProjeto.innerHTML = this.textoDescricao;
    
    if(this.existeTextoAlternativo){
      const botaoSaibaMais = document.createElement('button');
      botaoSaibaMais.classList.add('saiba-mais');
      botaoSaibaMais.setAttribute('tabindex', 0);
      botaoSaibaMais.setAttribute('data-bs-toggle', 'popover');
      botaoSaibaMais.setAttribute('data-bs-trigger', 'focus');
      botaoSaibaMais.setAttribute('data-bs-title', (this.tituloTextoAlternativo) + ' (Projeto)');
      botaoSaibaMais.setAttribute('data-bs-content', this.textoAlternativo);
      botaoSaibaMais.textContent = 'Saiba Mais';
      descricaoProjeto.appendChild(botaoSaibaMais);
    }
    
    const corpoProjeto = document.createElement('div');
    corpoProjeto.classList.add('card-projeto__corpo');
    
    this.linguagensProjeto.forEach(linguagem => {
      const marcador = document.createElement('span');
      marcador.classList.add('card-projeto__corpo__marcador');
      marcador.textContent = linguagem;
      corpoProjeto.appendChild(marcador);
    })
    
    corpoProjeto.appendChild(descricaoProjeto);
    
    return corpoProjeto;
  }
  
  criarRodape(){
    const linkProjeto = document.createElement('a');
    linkProjeto.classList.add('card-projeto__rodape__link');
    linkProjeto.setAttribute('href', this.URLProjeto);
    linkProjeto.setAttribute('target', '_blank');
    linkProjeto.textContent = 'Ver projeto';
    
    const dificuldadeProjeto = document.createElement('span');
    dificuldadeProjeto.classList.add('card-projeto__rodape__marcador');
    dificuldadeProjeto.setAttribute('data-toggle', 'tooltip');
    dificuldadeProjeto.setAttribute('data-placement', 'bottom');
    dificuldadeProjeto.setAttribute('title', 'Dificuldade do Projeto');
    dificuldadeProjeto.textContent = this.dificuldadeTexto;
    
    const rodapeProjeto = document.createElement('div');
    rodapeProjeto.classList.add('card-projeto__rodape');
    rodapeProjeto.appendChild(linkProjeto);
    rodapeProjeto.appendChild(dificuldadeProjeto);

    return rodapeProjeto;
  }
  
  //Agrupamento de todos o conteúdo e formação do card
  criarCard(){

    const novoCard = document.createElement('div');
    novoCard.classList.add('card-projeto');
    novoCard.classList.add(`card-projeto-${this.dificuldade.toLowerCase()}`);
    novoCard.setAttribute('data-conteudo-projetos', 'card-projeto');
    
    this.linguagensProjeto.forEach(linguagem => {
      const dataAttribute = `data-conteudo-projetos-linguagem-${linguagem.toLowerCase()}`;
      novoCard.setAttribute(dataAttribute, '');
    });
    
    novoCard.appendChild(this.criarMarcador());
    novoCard.appendChild(this.criarCabecalho());
    novoCard.appendChild(this.criarCorpo());
    novoCard.appendChild(this.criarRodape());
    
    this.div.appendChild(novoCard);
  }
  
}

export{
  cardProjeto
}