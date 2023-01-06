import { cardProjeto } from "./card-projeto.js";

export class cardProjetosPGAuxiliar extends cardProjeto{
  constructor(titulo, linguagens, descricao, existeSaibaMais, tituloSaibaMais, saibaMais, link, dificuldade){
    super(titulo, linguagens, descricao, existeSaibaMais, tituloSaibaMais, saibaMais, link, dificuldade);
  }

  criarRodape({classeLink, classeRodapeBTNPreview, classeRodape}){
    const linkProjeto = document.createElement('a');
    linkProjeto.classList.add(classeLink);
    linkProjeto.setAttribute('data-projeto-link', '');
    linkProjeto.setAttribute('href', this.URLProjeto);
    linkProjeto.setAttribute('target', '_blank');
    linkProjeto.textContent = 'Ver projeto';
    
    const rodapeProjeto = document.createElement('div');
    rodapeProjeto.classList.add(classeRodape);

    const BTNPreview = document.createElement('a');
    BTNPreview.classList.add(classeRodapeBTNPreview);
    BTNPreview.setAttribute('data-btn-preview', '')
    // BTNPreview.setAttribute('data-toggle', 'tooltip');
    // BTNPreview.setAttribute('data-placement', 'bottom');
    // BTNPreview.setAttribute('data-bs-original-title', 'Ver o Preview do Projeto');
    
    const textoPreview = (document.createElement('span'));
    textoPreview.textContent = 'Preview';

    const iconeBTNPreview = document.createElement('i');
    iconeBTNPreview.classList.add('bi');
    iconeBTNPreview.classList.add('bi-eye-fill');

    BTNPreview.appendChild(textoPreview);
    BTNPreview.appendChild(iconeBTNPreview);

    rodapeProjeto.appendChild(linkProjeto);
    rodapeProjeto.appendChild(BTNPreview);
    
    return rodapeProjeto;
  }
  
  //Agrupamento de todos o conteúdo e formação do card
  criarCard(index){
    const div = document.querySelector('[data-conteudo="projetos"]');

    const novoCard = document.createElement('div');
    novoCard.setAttribute('data-projeto-id', index);
    novoCard.classList.add(`card-pg-auxiliar-projeto`);
    novoCard.setAttribute('data-conteudo-projetos', 'card-projeto');
    
    this.linguagensProjeto.forEach(linguagem => {
      const dataAttribute = `data-conteudo-projetos-linguagem-${linguagem.toLowerCase()}`;
      novoCard.setAttribute(dataAttribute, '');
    });
    
    const classes = {
      classeMarcador: 'card-pg-auxiliar-projeto__marcador',
      classeTitulo: 'card-pg-auxiliar-projeto__cabecalho__titulo',
      classeCabecalho: 'card-pg-auxiliar-projeto__cabecalho',
      classesCorpo: {
        classeDescricao: 'card-pg-auxiliar-projeto__corpo__descricao',
        classeCorpoProjeto: 'card-pg-auxiliar-projeto__corpo',
        classeCorpoMarcador: 'card-pg-auxiliar-projeto__corpo__marcador'
      },
      classesRodape: {
        classeLink: 'card-pg-auxiliar-projeto__rodape__link',
        classeRodapeBTNPreview: 'card-pg-auxiliar-projeto__rodape__botao-preview',
        classeRodape: 'card-pg-auxiliar-projeto__rodape'
      }
    }
    
    novoCard.appendChild(this.criarMarcador(classes));
    novoCard.appendChild(this.criarCabecalho(classes));
    novoCard.appendChild(this.criarCorpo(classes.classesCorpo));
    novoCard.appendChild(this.criarRodape(classes.classesRodape));

    div.appendChild(novoCard);
  }
}