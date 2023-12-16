"use strict"

import { fecharModal, controleFechamentoModal } from "./utilitarios/modal.js";
import { conteudo } from './conteudo/conteudo-pg-principal.js';

(() => {  

  fetch('https://gist.githubusercontent.com/gabrieszin/c2136e42374bf2b78eac871b840543ad/raw/bd02b2c44a47a861024fbbcb12fabfa5a303df9d/projetos.json')
  .then((result) => {
    result.json().then((dados) => { 
      // console.log(dados) 
      
    });
  }).catch((err) => {
    
  });

  if(document.title == 'Gabriel Ribeiro - Portfólio'){
    $('body').html(conteudo)
  }

  // Verificando página e redirecionando para a página inicial
  if(new URL(window.location).origin.toLowerCase().trim() === 'https://gabrieszin.github.io'){
    if(document.title.trim() === 'Projetos Antigos - Gabriel Ribeiro - Portfólio' || document.title.trim() === 'Projetos dos Cursos da Alura - Gabriel Ribeiro - Portfólio'){
      window.location.href = '../../index.html'
    }
  }

  $(document).ready(function(){
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    $('[data-bs-toggle="popover"]').popover();  

    const btnFecharModais = document.querySelectorAll("[data-bs-dismiss=modal]");
    btnFecharModais.forEach(elemento =>{
      elemento.addEventListener('click', (evento) => {
        fecharModal(elemento)
      })
    })
    
    const btnRecarregarPagina = document.querySelectorAll('[data-recarrega-pagina]');
    btnRecarregarPagina.forEach(botao => {
      botao.onclick = () => {
        window.location.reload();
      }
    })
  });
  
  window.addEventListener("load", () => {
    const areaImportacao = document.createElement('section');
    areaImportacao.setAttribute('data-area-importacao', '');
  
    const rodape = `<footer class="rodape container-principal"><section class="rodape__secao"><div><h4 class="rodape__secao__titulo">Portfólio</h4><p>Gabriel Ribeiro</p> </div><a class="rodape__secao__link pointer" data-bs-toggle="modal" data-bs-target="#modal-direitos-autorais">Direitos autorais&nbsp;<i class="bi bi-arrow-up-right-square-fill rodape__secao__link__icone"></i></a></section> <ul class="rodape__secao"><li><a href="../../index.html#projetos" class="rodape__secao__link">Projetos</a></li> <li><a href="../../index.html#linguagens" class="rodape__secao__link">Linguagens</a></li> <li><a href="../../index.html#sobre" class="rodape__secao__link">Sobre mim</a></li> <li><a href="../../index.html#contato" class="rodape__secao__link">Contato</a></li> </ul> <ul class="rodape__secao"> <h4 class="rodape__secao__titulo">Contato</h4></li> <li><a href="mailto:devgabrielribeiro@gmail.com" class="rodape__secao__link">E-mail</a></li> <li><a href="https://www.linkedin.com/in/gabrielribeirodev" class="rodape__secao__link">Linkedin</a></li> <li><a href="https://t.me/devgabrielribeiro" class="rodape__secao__link">Telegram</a></li> </ul> <div class="rodape__base"> <p class="rodape__base__descricao">&copy; Gabriel Ribeiro 2022<span data-ano-atual></span></p> </div></footer>`;
  
    const modalDireitosAutorais = "<div class='modal fade' id='modal-direitos-autorais' tabindex='-1' aria-labelledby='modal-direitos-autorais-label' aria-hidden='true'> <div class='modal-dialog modal-dialog-centered'><div class='modal-content modal-estilo'> <div class='modal-header'> <h5 class='modal-title' id=''></h5><button data-modal-fecha><i class='bi bi-x-lg'></i></button> </div> <div class='modal-body'> <p>Para o desenvolvimento deste site foram utilizados recursos ou mídias disponibilizadas pelos seguintes serviços:</p><br> <ol> <li>Unsplash&nbsp;<a href='https://unsplash.com' target='_blank'>site oficial&nbsp;<i class='bi bi-arrow-up-right-square'></i></a></li> <li>Bootstrap&nbsp;<a href='https://getbootstrap.com/' target='_blank'>site oficial&nbsp;<i class='bi bi-arrow-up-right-square'></i></a></li> <li>Bootstrap Icons&nbsp;<a href='https://icons.getbootstrap.com' target='_blank'>site oficial&nbsp;<i class='bi bi-arrow-up-right-square'></i></a></li> <li>jQuery&nbsp;<a href='https://jquery.com' target='_blank'>site oficial&nbsp;<i class='bi bi-arrow-up-right-square'></i></a></li> <li>UnDraw&nbsp;<a href='https://undraw.co' target='_blank'>site oficial&nbsp;<i class='bi bi-arrow-up-right-square'></i></a></li> </ol> </div> <div class='modal-footer'> <p>&copy; Gabriel Ribeiro 2022<span data-ano-atual></span></p> </div> </div> </div></div>";
    const vLibras = "<div vw class='enabled'><div vw-access-button class='active'></div> <div vw-plugin-wrapper><div class='vw-plugin-top-wrapper'></div> </div></div><script src='https://vlibras.gov.br/app/vlibras-plugin.js'></script><script> new window.VLibras.Widget('https://vlibras.gov.br/app');</script>";
    
    areaImportacao.innerHTML += rodape;
    areaImportacao.innerHTML += modalDireitosAutorais;
    areaImportacao.innerHTML += vLibras;
    
    const body = document.querySelector('body');
    body.appendChild(areaImportacao);
    
    const area = document.querySelectorAll("[data-ano-atual]");
    const dataAtual = new Date();
    
    area.forEach(element => {
      element.textContent = ` -  ${dataAtual.getFullYear()}`;
    });
  
    // const loader = document.querySelector('.loader');
    // loader.style.display = 'none';
    
    controleFechamentoModal();
  })

  window.addEventListener("scroll", () => {
    if(window.scrollY >= document.querySelector('.linguagens.container-principal').clientHeight){
      $(document.querySelector('#menu-flutuante')).fadeIn(300);
      $(document.querySelector('#menu-flutuante')).css('display', 'flex');
    }else{
      $(document.querySelector('#menu-flutuante')).fadeOut(300);
    }
  })

})();