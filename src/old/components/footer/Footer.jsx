import './footer.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Footer({ fnc }) {
  return (
    <footer className="footer">
      <div className="footer__rodape">
        <p className="emphasis">Desenvolvido por Gabriel Ribeiro</p>
        <div>
          <p><img src="./img/svgs/copyright.svg" alt="Copyright" />&nbsp;2022 - <span>{new Date().getFullYear()}</span></p>
          <div className="footer__rodape__links">
            <a data-action="show-modal">Direitos Autorais</a>
            <Link to={"/?or=freelancer"} data-element="ref-contact">Visualização p<span className='arial'>/</span> freelance</Link>
            <a onClick={fnc}>Ir para o topo</a>
          </div>
        </div>
      </div >
    </footer >
  )
}

Footer.propTypes = {
  fnc: PropTypes.func.isRequired,
}
