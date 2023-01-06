import { dadosProjetos } from "../conteudo/conteudos.js";
import { cardProjeto } from "../classes/card-projeto.js";

export const carregarCardsPrincipal = () => {

  let listagemProjetos = [];

  dadosProjetos.forEach((projeto, index) => {
    if(projeto.dificuldade == 3){
      const classeCard =  new cardProjeto(projeto.titulo, projeto.linguagens, projeto.descricao, projeto.existeSaibaMais, projeto.tituloSaibaMais, projeto.saibaMais, projeto.link, projeto.dificuldade);
      classeCard.criarCard(index);

      const dadosIdentificacao = {
        titulo: projeto.titulo,
        id: index
      }

      listagemProjetos.push(dadosIdentificacao);
    }
  });
  
  dadosProjetos.forEach((projeto, index) => {
    if(projeto.dificuldade == 2){
      const classeCard = new cardProjeto(projeto.titulo, projeto.linguagens, projeto.descricao, projeto.existeSaibaMais, projeto.tituloSaibaMais, projeto.saibaMais, projeto.link, projeto.dificuldade);
      classeCard.criarCard(index);

      const dadosIdentificacao = {
        titulo: projeto.titulo,
        id: index
      }
      
      listagemProjetos.push(dadosIdentificacao);
    }
  });
  
  dadosProjetos.forEach((projeto, index) => {
    if(projeto.dificuldade == 1){
      const classeCard = new cardProjeto(projeto.titulo, projeto.linguagens, projeto.descricao, projeto.existeSaibaMais, projeto.tituloSaibaMais, projeto.saibaMais, projeto.link, projeto.dificuldade);
      classeCard.criarCard(index);

      const dadosIdentificacao = {
        titulo: projeto.titulo,
        id: index
      }
      
      listagemProjetos.push(dadosIdentificacao);
    }
  });
  
  return listagemProjetos;
}