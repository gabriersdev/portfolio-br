import { dadosProjetos } from "../conteudo/conteudos.js";

export const carregarQuantidadeProjetosLinguagem = () => {
  
  const todasLinguagens = [
    ['php', 0],
    ['mysql', 0],
    ['js', 0],
    ['css', 0],
    ['html', 0]
  ]
  
  dadosProjetos.forEach(projeto => {
    projeto.linguagens.forEach((linguagem) => {
      
      todasLinguagens.forEach((dados, index) => {
        
        const nomeLinguagem = todasLinguagens[index][0];

        if(linguagem.toLowerCase() == nomeLinguagem){  
          todasLinguagens[index][1] += 1;
        }
      })
      
    })
  })
  
  const contadores = document.querySelectorAll('[data-contador-projeto]');
  contadores.forEach(contador => {
    const nomeContador = contador.dataset.contadorProjeto;
    contador.textContent = 0;
    
    todasLinguagens.forEach((dados, index) => {

      const nomeLinguagem = todasLinguagens[index][0];
      const qtdeProjetosLinguagem = todasLinguagens[index][1];

      if(nomeContador == nomeLinguagem){
        contador.textContent = qtdeProjetosLinguagem;
      }
    })
  })

}