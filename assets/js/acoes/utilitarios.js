import { fecharModal } from "../modal.js";

const acoes = {
  modal:button => button.addEventListener("click", (evento) => {
    fecharModal(button);
  })
}

export{
  acoes
}