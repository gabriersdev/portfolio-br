import './footer.css'
import PropTypes from 'prop-types'

export default function Footer({ fnc }) {
  return (
    <footer className="footer">
      <div className="footer__rodape">
        <p className="destaque">Desenvolvido por Gabriel Ribeiro</p>
        {/* TODO - criar ação para acionar o dialog */}
        <div><img src="./img/svgs/copyright.svg" alt="Copyright" />&nbsp;2022 - <span>{new Date().getFullYear()}</span>
          <p><a className="link-visivel" data-direito-autorais>Direitos Autorais</a> | <a className="link-visivel"
            onClick={fnc}>Ir para o topo</a></p>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  fnc: PropTypes.func.isRequired
}
