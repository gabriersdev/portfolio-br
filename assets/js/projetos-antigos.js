import { carregarCardsAuxiliar } from "./carregar/carregar-cards-auxiliar.js";
import { pesquisarProjeto } from "./interacao/pesquisa-projetos.js";
import { dadosProjetosAntigos } from "./conteudo/conteudos-pg-auxiliar.js";

(() => {
  pesquisarProjeto(carregarCardsAuxiliar(dadosProjetosAntigos))
})();