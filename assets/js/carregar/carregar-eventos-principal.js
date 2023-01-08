import { projetos } from "../classes/projetos.js";
import { linguagens } from "../classes/linguagens.js";

const classeProjetos = new projetos();

const cardsLinguagem = {
  php:botao => botao.addEventListener('click', evento => {window.location.replace('#projetos'); classeProjetos.exibirProjetos(botao.dataset.acaoCardLinguagem.toLowerCase(), document.querySelector(`[data-acao-projeto=${botao.dataset.acaoCardLinguagem.toLowerCase()}`))}),
  js:botao => botao.addEventListener('click', evento => {window.location.replace('#projetos'); classeProjetos.exibirProjetos(botao.dataset.acaoCardLinguagem.toLowerCase(), document.querySelector(`[data-acao-projeto=${botao.dataset.acaoCardLinguagem.toLowerCase()}`))}),
  css:botao => botao.addEventListener('click', evento => {window.location.replace('#projetos'); classeProjetos.exibirProjetos(botao.dataset.acaoCardLinguagem.toLowerCase(), document.querySelector(`[data-acao-projeto=${botao.dataset.acaoCardLinguagem.toLowerCase()}`))}),
  mysql:botao => botao.addEventListener('click', evento => {window.location.replace('#projetos'); classeProjetos.exibirProjetos(botao.dataset.acaoCardLinguagem.toLowerCase(), document.querySelector(`[data-acao-projeto=${botao.dataset.acaoCardLinguagem.toLowerCase()}`))}),
  html:botao => botao.addEventListener('click', evento => {window.location.replace('#projetos'); classeProjetos.exibirProjetos(botao.dataset.acaoCardLinguagem.toLowerCase(), document.querySelector(`[data-acao-projeto=${botao.dataset.acaoCardLinguagem.toLowerCase()}`))}),
  java:botao => botao.addEventListener('click', evento => {window.location.replace('#projetos'); classeProjetos.exibirTodosOsProjetos(document.querySelector('[data-acao-projeto="todos"'))}),
  git:botao => botao.addEventListener('click', evento => {window.location.replace('#projetos'); classeProjetos.exibirTodosOsProjetos(document.querySelector('[data-acao-projeto="todos"'))}),
  figma:botao => botao.addEventListener('click', evento => {window.location.replace('#projetos'); classeProjetos.exibirTodosOsProjetos(document.querySelector('[data-acao-projeto="todos"'))})
};

const btnProjetos = {
  todos:botao => botao.addEventListener("click", evento => {classeProjetos.exibirTodosOsProjetos(botao)}),
  php:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
  java:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
  mysql:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
  js:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
  css:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
  html:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
}

const classeLinguagens = new linguagens();

const btnlinguagens = {
  todas:botao => botao.addEventListener("click", evento => {classeLinguagens.exibirTodasAsLinguagens(botao)}),
  front_end:botao => botao.addEventListener("click", evento => {classeLinguagens.exibirLinguagem(botao.getAttribute("data-acao-linguagens").toLowerCase(), botao)}),
  back_end:botao => botao.addEventListener("click", evento => {classeLinguagens.exibirLinguagem(botao.getAttribute("data-acao-linguagens").toLowerCase(), botao)}),
  programacao:botao => botao.addEventListener("click", evento => {classeLinguagens.exibirLinguagem(botao.getAttribute("data-acao-linguagens").toLowerCase(), botao)}),
  desenvolvimento_web:botao => botao.addEventListener("click", evento => {classeLinguagens.exibirLinguagem(botao.getAttribute("data-acao-linguagens").toLowerCase(), botao)}),
  ux_ui:botao => botao.addEventListener("click", evento => {classeLinguagens.exibirLinguagem(botao.getAttribute("data-acao-linguagens").toLowerCase(), botao)})
}

export const acoes = {
  cardsLinguagem,
  btnProjetos,
  btnlinguagens
}