import { isEmpty, lengthZero } from '../utilitarios/utilitarios.js';

export const carregarPreview = (btn) => {
  const pai = btn.parentElement;
  const btnComLink = pai.querySelector('[data-projeto-link]');
  const link = btnComLink.getAttribute('href');

  const modalExibicaoPreview = document.querySelector('#modal-exibicao-preview');

  const corpo = modalExibicaoPreview.querySelector('.modal-body');
  const spinner = corpo.querySelector('.modal-exibicao-preview__corpo__spinner');
  const iframe = corpo.querySelector('iframe');

  //Criando elemento para dar feedback sobre o link estar ou não vazio
  const linkVazio = document.createElement('p');
  linkVazio.dataset.linkVazio = '';
  corpo.appendChild(linkVazio);

  spinner.style.display = 'block';

  iframe.classList.contains('block') ? iframe.classList.remove('block') : '';
  iframe.setAttribute('src', link);

  $(modalExibicaoPreview).modal('show');
  const vazio = corpo.querySelector('[data-link-vazio]');

  //Verifica se o link está ou não vazio e exibe o feedback (se tiver vazio)
  if(isEmpty(link) || lengthZero(link)){
    vazio.textContent = '';
    vazio.textContent = 'Não foi atribuído um link para este projeto'
    spinner.style.display = 'none';
  }
  
  else{
    vazio.textContent = '';
    iframe.addEventListener("load" , function(){
      iframe.classList.add('block');
      spinner.style.display = 'none';
    })
  }

}