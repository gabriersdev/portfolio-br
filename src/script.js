"use strict";

import { data as conteudos } from './data.js';

(() => {
  // Block alter props of object and add props
  Object.freeze(conteudos);

  const controlarModal = () => {
    const botaoModal = document.querySelectorAll('[data-direito-autorais]');
    botaoModal.forEach(botao => {
      botao.addEventListener('click', () => {
        const modal = document.querySelector('[data-modal]');
        modal.showModal();

        const btnFecha = modal.querySelector('[data-modal-fecha]');
        btnFecha.addEventListener('click', () => {
          modal.close();
        })
      })
    });
  }

  const botaoRecarregar = document.querySelectorAll('[data-recarrega-pagina]');
  botaoRecarregar.forEach(botao => {
    botao.addEventListener('click', () => {
      window.location.reload();
    })
  })

  window.addEventListener("load", function () {
    // Render









    // Projects

  });

})();
