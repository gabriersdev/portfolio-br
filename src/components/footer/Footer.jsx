import './footer.css'
import PropTypes from 'prop-types'

export default function Footer({ fnc }) {
  return (
    <footer className="footer">
      <div className="footer__rodape">
        <p className="destaque">Desenvolvido por Gabriel Ribeiro</p>
        <div>
          <p><img src="./img/svgs/copyright.svg" alt="Copyright" />&nbsp;2022 - <span>{new Date().getFullYear()}</span></p>
          <div className="footer__rodape__links">
            <a data-action="show-modal">Direitos Autorais</a>
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
