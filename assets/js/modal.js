function trocarTipoFeedbackModal(tipo, dadosPersonalizacao){
  const datas = document.querySelectorAll("[data-feedback]");
  const div = datas[0].parentElement;
  const imagem = div.querySelector("[data-feedback=imagem]");
  const titulo = div.querySelector("[data-feedback=titulo");
  const descricao = div.querySelector("[data-feedback=descricao");

  tipo == "sucesso" ? tipo = true : "";
  tipo == "erro" ? tipo = false : "";

  imagem.classList.contains("erro") ? imagem.classList.remove("erro") : "";
  imagem.classList.contains("sucesso") ? imagem.classList.remove("sucesso") : "";
  imagem.classList.contains("excesso") ? imagem.classList.remove("excesso") : "";

  titulo.classList.contains("erro") ? titulo.classList.remove("erro") : "";
  titulo.classList.contains("sucesso") ? titulo.classList.remove("sucesso") : "";
  titulo.classList.contains("excesso") ? titulo.classList.remove("excesso") : "";

  switch (tipo){

    case true:

      imagem.classList.add("sucesso");

      titulo.classList.add("sucesso");
      titulo.innerText = "A sua mensagem foi enviada!";

      descricao.innerText = "E em breve você receberá uma resposta :)";
      break;

    case false:

      imagem.classList.add("erro");

      titulo.classList.add("erro");
      titulo.innerText = "Não foi possível enviar a sua mensagem";

      descricao.innerText = "Desculpe :( Tente novamente mais tarde";
      break;
    
    case "excesso":

      imagem.classList.add("excesso");

      titulo.classList.add("excesso");
      titulo.innerText = "Você já enviou bastante mensagens";

      descricao.innerText = "Não se preocupe, logo mais você será respondido";
      break;

    case "personalizado-erro":
    
      imagem.classList.add("erro");

      titulo.classList.add("erro");
      titulo.innerText = dadosPersonalizacao.titulo;

      descricao.innerText = dadosPersonalizacao.descricao;
      break;
  }
}

function controlarExibicaoModal(objeto, condicao){
  condicao.toLowerCase();
  if(condicao == "show"){
    objeto.classList.add("show");
    objeto.setAttribute("tabindex", "-1");
    objeto.style.display = "block";
    objeto.setAttribute("aria-hidden", "");
    objeto.setAttribute("aria-modal", "true");
    objeto.setAttribute("role", "dialog");
  }else{
    objeto.classList.contains("show") ? objeto.classList.remove("show") : "";
    objeto.setAttribute("tabindex", "");
    objeto.style.display = "none";
    objeto.setAttribute("aria-hidden", "true");
    objeto.setAttribute("aria-modal", "");
    objeto.setAttribute("role", "");
  }
}

function fecharModal(elemento){
  const pai = elemento.parentElement;
  const avo = pai.parentElement;
  const bisavo = avo.parentElement;
  const tataravo = bisavo.parentElement;
  
  controlarExibicaoModal(tataravo, "hide");
}

export{
  trocarTipoFeedbackModal,
  controlarExibicaoModal,
  fecharModal
}