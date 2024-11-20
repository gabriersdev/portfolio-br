import './menu.css';
import PropTypes from 'prop-types';

export default function Menu({ fnc }) {
  return (
    <menu className="menu" id="topo">
      <a className="identification-page" onClick={fnc}>
        <img className="menu__image" src="./img/profile.png" />
        <h3 className="menu__title">Gabriel Ribeiro</h3>
      </a>
      <nav>
        <ul className="menu__list">
          <li className="menu__list__item"><a href="#about">Sobre mim</a></li>
          <li className="menu__list__item"><a href="#experience">Experiência</a></li>
          <li className="menu__list__item"><a data-element="ref-contact" href="#services">Serviços</a></li>
          <li className="menu__list__item__contato" data-element="ref-contact"><a href="mailto:devgabrielribeiro@gmail.com">Fale comigo</a></li>
          <li className="menu__list__item__contato" data-element="ref-alternative"><a href="https://github.com/gabriersdev/">Meu Github</a></li>
        </ul>
      </nav>
    </menu>
  )
}

Menu.propTypes = {
  fnc: PropTypes.func.isRequired
}
