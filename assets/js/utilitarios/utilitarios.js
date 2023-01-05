import { projetos } from "../classes/projetos.js";

const calcularPeriodo = (inicio, forma) => {
  let dataInicio = new Date(inicio);
  let dataAtual = new Date();
  
  forma = forma.toLowerCase();
  
  let diferencaSegundos = Math.floor(dataAtual.getTime() - dataInicio.getTime());
  let diferencaAnos = null;
  
  if(forma == 'meses'){
    diferencaAnos = Math.floor(diferencaSegundos / (1000 * 3600 * 24 * 30));
  }else if(forma == 'anos'){
    diferencaAnos = Math.floor(diferencaSegundos / (1000 * 3600 * 24 * 365.3));
  }
  
  return diferencaAnos;
}

const ajustarPeriodoProgramando = () => {
  const forma = 'meses';
  const diferencaAnos = calcularPeriodo('2022-01-01 00:00:00', forma);
  
  const periodoProgramando = document.querySelectorAll('[data-periodo-programando');
  periodoProgramando.forEach(periodo => {
    periodo.textContent = `${diferencaAnos} ${forma}`;
  })
}

const ajustarIdade = () => {
  const diferencaAnos = calcularPeriodo('2004-01-27 00:00:00', 'anos');
  
  const idadeAtual = document.querySelectorAll('[data-idade-atual]');
  idadeAtual.forEach(idade => {
    idade.textContent = diferencaAnos;
  })
}

const controlarNenhumProjeto = (condicao) => {
  const nenhumProjeto = document.querySelector('[data-conteudo="nenhum-projeto"]');
  const classeProjetos = new projetos('inline-block');
  
  try{
    if(condicao){
      nenhumProjeto.style.display = 'block';
      
      classeProjetos.ocultarCardsProjetos();
      classeProjetos.desativarTodosOsBotoes();
    }else{
      nenhumProjeto.style.display = 'none';
    }
  }catch{
  }
}

const limparFormulario  = () => {
  const inputs = document.querySelectorAll("[data-input-formulario]");

  inputs.forEach(elemento => {
    elemento.value = "";
  })
}

const acoesModal = {
  modal:button => button.addEventListener("click", (evento) => {
    fecharModal(button);
  })
}

export{
  ajustarPeriodoProgramando,
  ajustarIdade,
  controlarNenhumProjeto,
  acoesModal,
  limparFormulario
}