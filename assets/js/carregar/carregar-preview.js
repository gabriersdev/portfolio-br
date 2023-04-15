import { isEmpty, lengthZero } from '../utilitarios/utilitarios.js';

export const carregarPreview = (btn) => {
  const pai = btn.parentElement;
  const btnComLink = pai.querySelector('[data-projeto-link]');
  const link = btnComLink.getAttribute('href');

  const modalExibicaoPreview = document.querySelector('#modal-exibicao-preview');

  const corpo = modalExibicaoPreview.querySelector('.modal-body');
  const spinner = corpo.querySelector('.modal-exibicao-preview__corpo__spinner');
  let iframe = corpo.querySelector('iframe');

  //Criando elemento para dar feedback sobre o link estar ou não vazio
  if(isEmpty(corpo.querySelector('p'))){
    const linkVazio = document.createElement('p');
    linkVazio.dataset.linkVazio = '';
    corpo.appendChild(linkVazio);
  }

  spinner.classList.contains('none') ? spinner.classList.remove('none') : '';

  if(isEmpty(iframe)){
    corpo.innerHTML += `<iframe src="" class="modal-exibicao-preview__corpo__iframe block" frameborder="0" sandbox="allow-same-origin allow-forms allow-modals allow-popups allow-scripts"> </iframe>`;
    iframe = corpo.querySelector('iframe');
  }
  
  iframe.setAttribute('src', null);
  iframe.classList.contains('block') ? iframe.classList.remove('block') : '';
  iframe.setAttribute('src', link);

  $(modalExibicaoPreview).modal('show');
  const vazio = corpo.querySelector('[data-link-vazio]');
  iframe.style.display = 'none !important';

  //Verifica se o link está ou não vazio e exibe o feedback (se tiver vazio)
  if(isEmpty(link) || lengthZero(link)){
    iframe.classList.contains('block') ? iframe.classList.remove('block') : '';
    // iframe.style.zIndex = 1;
    iframe.remove()
    vazio.style.zIndex = 1;
    spinner.style.display = 'none';
    vazio.textContent = '';
    vazio.textContent = 'Não foi atribuído um link para este projeto'
    spinner.classList.add('none');
  }
  
  else{
    vazio.textContent = '';
    iframe.addEventListener("load" , function(){
      iframe.style.zIndex = 1;
      iframe.classList.add('block');
      spinner.classList.add('none');
    })
  }

}