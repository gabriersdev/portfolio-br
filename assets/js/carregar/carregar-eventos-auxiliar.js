import { projetos } from "../classes/projetos"

const classeProjetos = new projetos()

const acoesProjetos = {
  todos:botao => botao.addEventListener("click", evento => {classeProjetos.exibirTodosOsProjetos(botao)}),
  php:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
  js:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
  css:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
  mysql:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
  html:botao => botao.addEventListener("click", evento => {classeProjetos.exibirProjetos(botao.getAttribute("data-acao-projeto").toLowerCase(), botao)}),
}

export const acoes = {
  acoesProjetos
}