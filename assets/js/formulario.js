const limparFormulario  = () => {
  const inputs = document.querySelectorAll("[data-input-formulario]");

  inputs.forEach(elemento => {
    elemento.value = "";
  })
}

export {
  limparFormulario
}