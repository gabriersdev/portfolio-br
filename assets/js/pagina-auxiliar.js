import { projetos } from "./classes/projetos.js";
import { controlarNenhumProjeto } from "./utilitarios/utilitarios.js";
import { cardProjetosPGAuxiliar } from "./classes/card-projeto-pg-auxiliar.js";
import { carregarPreview } from "./view/carregar-preview.js";
import { dadosProjetos } from "./conteudo/conteudos-pg-auxiliar.js";

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

const selecaoProjeto = document.querySelector('[data-selecao-projeto]');
const listaProjetos = document.querySelector('[data-lista-projetos]');

selecaoProjeto.onchange = (evento) => {
  const separado = selecaoProjeto.value.split(' ');
  const id = parseInt(separado.slice(-1));
  
  if(!isNaN(id)){
    const classeProjetos = new projetos('inline-block');
    
    controlarNenhumProjeto(false);
    
    !classeProjetos.exibirProjetoSelecionado(id);
  }else{
    controlarNenhumProjeto(true);
  }
}

const form = document.querySelector('[data-pg-aux-formulario]');
form.addEventListener('submit', (evento) => {
  evento.preventDefault();
})

listagemProjetos.forEach(projeto => {
  const opcao = document.createElement('option');
  opcao.value = `${projeto.titulo} - ${projeto.id}`,

  listaProjetos.appendChild(opcao);
});


const btnPreview = document.querySelectorAll('[data-btn-preview]');
btnPreview.forEach(btn => {
  btn.addEventListener('click', (evento) => {
    carregarPreview(btn);
  })
})

const classeProjetos = new projetos('inline-block');

const acoesProjetos = {
  todos:botao => botao.addEventListener("click", evento => {classeProjetos.exibirTodosOsProjetos(botao)}),
  php:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
  js:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
  css:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
  mysql:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
  html:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
}

const botoesAcaoProjetos = document.querySelectorAll("[data-acao-projeto]");
botoesAcaoProjetos.forEach(botao => {
  const nomeAcaoProjeto = botao.getAttribute("data-acao-projeto").toLowerCase();
  if(acoesProjetos[nomeAcaoProjeto]){
    acoesProjetos[nomeAcaoProjeto](botao)
  }
})
