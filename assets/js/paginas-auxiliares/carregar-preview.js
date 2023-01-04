export const carregarPreview = (btn) => {
  const pai = btn.parentElement;
  const btnComLink = pai.querySelector('[data-projeto-link]');
  const link = btnComLink.getAttribute('href');

  const modalExibicaoPreview = document.querySelector('#modal-exibicao-preview');
  const corpo = modalExibicaoPreview.querySelector('.modal-body');
  const spinner = corpo.querySelector('.modal-exibicao-preview__corpo__spinner');
  const iframe = corpo.querySelector('iframe');

  spinner.style.display = 'block';

  iframe.classList.contains('block') ? iframe.classList.remove('block') : '';
  iframe.setAttribute('src', link);

  $(modalExibicaoPreview).modal('show');

  iframe.addEventListener("load" , function(){
    spinner.style.display = 'none';
    iframe.classList.add('block');
  })
}