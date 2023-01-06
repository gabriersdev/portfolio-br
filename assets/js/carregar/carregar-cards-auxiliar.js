import { dadosProjetos } from "../conteudo/conteudos-pg-auxiliar.js";
import { cardProjetosPGAuxiliar } from "../classes/card-projeto-pg-auxiliar.js";

export const carregarCardsAuxiliar = () => {
  let listagemProjetos = [];
  
  dadosProjetos.forEach((projeto, index) => {
    const nova = new cardProjetosPGAuxiliar(projeto.titulo, projeto.linguagens, projeto.descricao, projeto.existeSaibaMais, projeto.tituloSaibaMais, projeto.saibaMais, projeto.link, null);
    nova.criarCard(index);
    
    const dadosIdentificacao = {
      titulo: projeto.titulo,
      id: index
    }
    
    listagemProjetos.push(dadosIdentificacao);
  })

  return listagemProjetos;
}