import { projetos } from "../classes/projetos.js";
import { controlarNenhumProjeto } from "../utilitarios/utilitarios.js";

export const pesquisarProjeto = (listagemProjetos) => {

  const classeProjetos = new projetos('flex');

  const selecaoProjeto = document.querySelector('[data-selecao-projeto]');
  const listaProjetos = document.querySelector('[data-lista-projetos]');
  
  selecaoProjeto.onchange = (evento) => {
    const separado = selecaoProjeto.value.split(' ');
    const id = parseInt(separado.slice(-1));
    
    if(!isNaN(id)){
      controlarNenhumProjeto(false);
      // console.log(id);
      classeProjetos.exibirProjetoSelecionado(id);
    }else{
      controlarNenhumProjeto(true);
    }
  }
  
  const form = document.querySelector('[data-form-pesquisa-projeto]');
  form.addEventListener('submit', (evento) => {
    evento.preventDefault();
  })
  
  listagemProjetos.forEach(projeto => {
    const opcao = document.createElement('option');
    opcao.value = `${projeto.titulo} - ${projeto.id}`,
    
    listaProjetos.appendChild(opcao);
  });

  const recarregarProjetos = document.querySelector('[data-recarregar-projetos]');
  recarregarProjetos.addEventListener('click', (evento) => {
    evento.preventDefault();
    classeProjetos.exibirTodosOsProjetos(document.querySelector('[data-acao-projeto="todos"]'));

    const input = document.querySelector('[data-selecao-projeto]');
    input.value = '';
  })
}