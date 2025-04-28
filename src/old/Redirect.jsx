import { useEffect } from "react"

export default function Redirect() {
  useEffect(() => {
    const urlPagina = new URLSearchParams(window.location.search);
    const comandoRedirecionamento = urlPagina.get('to');

    switch (comandoRedirecionamento) {
      case 'curriculo':
        window.location.href = 'https://gabriersdev.github.io/resources?resource=resume';
        break;
      default:
        alert('Nenhum comando para redirecionamento foi recebido. Redirecionando para a página inicial do portfolio');
        window.location.href = '../../index.html';
    }
  }, [])

  return (
    <></>
  )
}
