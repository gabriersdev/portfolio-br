import { dadosProjetos } from "../conteudo/conteudos.js";
import { cardProjeto } from "../classes/card-projeto.js";

export const carregarCardsPrincipal = () => {

  let listagemProjetos = [];
  
  // Filtrando apenas os projetos com a propriedade visible === true
  dadosProjetos.filter((projeto) => projeto.visible === true)
  // Ordenando os projetos (os de maior dificuldade [3] primeiro, segundos dos projetos com menor dificuldade)
  .sort((a, b) => b.dificuldade - a.dificuldade)
  // Percorrendo os projetos
  .forEach((projeto, index) => {
    const classeCard = new cardProjeto(projeto.titulo, projeto.linguagens, projeto.descricao, projeto.existeSaibaMais, projeto.tituloSaibaMais, projeto.saibaMais, projeto.link, projeto.dificuldade);
    classeCard.criarCard(index);

    const dadosIdentificacao = {
      titulo: projeto.titulo,
      id: index
    }
    
    listagemProjetos.push(dadosIdentificacao);
  });

  return listagemProjetos;
}