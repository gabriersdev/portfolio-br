class cardProjeto{
  
  //Parâmetros para serem recebidos: titulo, linguagensProjeto (virá em array), textoDescricao, existeTextoAlternativo, tituloTextoAlternativo, textoAlternativo, URLProjeto, nivelDificuldade ==> Alguns atributos de parâmetro são necessários outros não
  //Definição das variáveis e seus valores usadas para criar um card na seção projetos
  constructor(titulo, linguagensProjeto, textoDescricao, existeTextoAlternativo, tituloTextoAlternativo, textoAlternativo, URLProjeto, nivelDificuldade) {   
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
  
  criarMarcador({classeMarcador}){
    const marcador = document.createElement('i');
    marcador.classList.add(classeMarcador);
    
    return marcador;
  }
  
  criarCabecalho({classeTitulo, classeCabecalho}){
    const tituloProjeto = document.createElement('h2');
    tituloProjeto.classList.add(classeTitulo);
    tituloProjeto.textContent = (this.titulo).substr(0, 25);
    
    const cabecalhoProjeto = document.createElement('div');
    cabecalhoProjeto.classList.add(classeCabecalho);
    cabecalhoProjeto.appendChild(tituloProjeto); 
    
    return cabecalhoProjeto;
  }
  
  criarCorpo({classeDescricao, classeCorpoProjeto, classeCorpoMarcador}){
    const descricaoProjeto = document.createElement('p');
    descricaoProjeto.classList.add(classeDescricao);
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
    corpoProjeto.classList.add(classeCorpoProjeto);

    this.linguagensProjeto.forEach((linguagem, index) => {
      if(index < 5){
        const marcador = document.createElement('span');
        marcador.classList.add(classeCorpoMarcador);
        marcador.textContent = linguagem;
        corpoProjeto.appendChild(marcador);
      }
    })
    
    corpoProjeto.appendChild(descricaoProjeto);
    
    return corpoProjeto;
  }
  
  criarRodape({classeLink, classeRodapeMarcador, classeRodape}){
    const linkProjeto = document.createElement('a');
    linkProjeto.classList.add(classeLink);
    linkProjeto.setAttribute('href', this.URLProjeto);
    linkProjeto.setAttribute('target', '_blank');

    try{
      if((new URL(this.URLProjeto).origin.trim()) == "https://github.com"){
        linkProjeto.innerHTML = `Ver no <i class="bi bi-github"></i>`
      }else{
        linkProjeto.textContent = 'Ver projeto'; 
      }
    }catch{
      linkProjeto.textContent = 'Ver projeto'; 
    }
    
    const rodapeProjeto = document.createElement('div');
    rodapeProjeto.classList.add(classeRodape);
    rodapeProjeto.appendChild(linkProjeto);
    
    if(this.nivelDificuldade !== null){
      const dificuldadeProjeto = document.createElement('span');
      dificuldadeProjeto.classList.add(classeRodapeMarcador);
      dificuldadeProjeto.setAttribute('data-toggle', 'tooltip');
      dificuldadeProjeto.setAttribute('data-placement', 'bottom');
      dificuldadeProjeto.setAttribute('title', 'Dificuldade do Projeto');
      dificuldadeProjeto.textContent = this.dificuldadeTexto;
      rodapeProjeto.appendChild(dificuldadeProjeto);
    }
    
    return rodapeProjeto;
  }
  
  //Agrupamento de todos o conteúdo e formação do card
  criarCard(index){
    const div = document.querySelector('[data-conteudo="projetos"]');

    const novoCard = document.createElement('div');
    novoCard.setAttribute('data-projeto-id', index);
    novoCard.classList.add('card-projeto');
    novoCard.classList.add(`card-projeto-${this.dificuldade.toLowerCase()}`);
    novoCard.setAttribute('data-conteudo-projetos', 'card-projeto');
    
    this.linguagensProjeto.forEach(linguagem => {
      const dataAttribute = `data-conteudo-projetos-linguagem-${linguagem.toLowerCase()}`;
      novoCard.setAttribute(dataAttribute, '');
    });
    
    const classes = {
      classeMarcador: 'card-projeto__marcador',
      classeTitulo: 'card-projeto__cabecalho__titulo',
      classeCabecalho: 'card-projeto__cabecalho',
      classesCorpo: {
        classeDescricao: 'card-projeto__corpo__descricao',
        classeCorpoProjeto: 'card-projeto__corpo',
        classeCorpoMarcador: 'card-projeto__corpo__marcador'
      },
      classesRodape: {
        classeLink: 'card-projeto__rodape__link',
        classeRodapeMarcador: 'card-projeto__rodape__marcador',
        classeRodape: 'card-projeto__rodape'
      }
    }
    
    novoCard.appendChild(this.criarMarcador(classes));
    novoCard.appendChild(this.criarCabecalho(classes));
    novoCard.appendChild(this.criarCorpo(classes.classesCorpo));
    novoCard.appendChild(this.criarRodape(classes.classesRodape));
    
    div.appendChild(novoCard);
  }
  
}

export{
  cardProjeto
}