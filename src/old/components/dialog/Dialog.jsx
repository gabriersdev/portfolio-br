import { useEffect } from 'react'
import './dialog.css'

export default function Dialog() {
  useEffect(() => {
    document.querySelector('[data-action="show-modal"]').addEventListener('click', () => {
      document.querySelector('[data-modal]').showModal();
    })

    document.querySelector('[data-modal-fecha]').addEventListener('click', () => {
      document.querySelector('[data-modal]').close()
    })
  }, [])

  return (
    <dialog className="modal" data-modal>
      <h3>Atribuição de Direitos Autorais</h3>

      <br />
      <p>Para o desenvolvimento deste site foram usados recursos das seguintes bibliotecas e/ou serviços:</p>

      <ul>
        <li>React</li>
        <li>Unsplash</li>
        <li>SVG Repo</li>
        <li>Bootstrap</li>
        <li>Bootstrap Icons</li>
        <li>AOS - Animate On Scroll Library</li>
        <li>GitHub (repositório) e GitHub Pages (deploy)</li>
      </ul>

      <p>Estilização do site baseada em um protótipo elaborado pela equipe do programa Oracle ONE e incrementada pelo
        desenvolvedor <b>Gabriel Ribeiro!</b></p><br />

      <button data-modal-fecha>Fechar</button>
    </dialog>
  )
}
