import { dadosProjetos, destaques } from "../conteudo/conteudos.js";

export const carregarQuantidadeProjetosLinguagem = () => {
  
  const todasLinguagens = [
    ['php', 0],
    ['java', 0],
    ['mysql', 0],
    ['js', 0],
    ['css', 0],
    ['html', 0],
    ['figma', 0],
    ['git', 0],
    ['python', 0],
    ['react', 0],
    ['MD', 0],
  ]

  dadosProjetos.concat(destaques).filter(p => p.visible && p.active).forEach(projeto => {
    if(projeto.linguagens !== undefined){
      projeto.linguagens.forEach((linguagem) => {
        todasLinguagens.forEach((dados, index) => {
          
          const nomeLinguagem = todasLinguagens[index][0];
          
          if(linguagem.toLowerCase() == nomeLinguagem){  
            todasLinguagens[index][1] += 1;
          }
        })
      })
    }
  })
  
  const contadores = document.querySelectorAll('[data-contador-projeto]');
  contadores.forEach(contador => {
    const nomeContador = contador.dataset.contadorProjeto;
    contador.textContent = 0;
    
    todasLinguagens.forEach((dados, index) => {

      const nomeLinguagem = todasLinguagens[index][0];
      const qtdeProjetosLinguagem = todasLinguagens[index][1];
      const nome_secao_cabecalho_cards = contador.closest('.cabecalho__cards');

      if(nomeContador == nomeLinguagem){
        if(qtdeProjetosLinguagem == 0){
          if(contador.closest('.card-linguagem-transparente') !== null){
            contador.parentElement.innerHTML = `<p class="contador-projetos__quantidade" data-contador-projeto="python">0</p><i class="bi bi-collection contador-projetos__icone"></i>`;
          }else{
            contador.parentElement.textContent = `Nenhum projeto desenvolvido`;
            // contador.parentElement.parentElement.remove();
          }
        }
        else if(qtdeProjetosLinguagem == 1 && nome_secao_cabecalho_cards == null){
          contador.parentElement.textContent = `${qtdeProjetosLinguagem} projeto desenvolvido`;
        }else{
          contador.textContent = qtdeProjetosLinguagem;
        }
      }
    })
  })

}