import './title.css'

export default function Title() {
  return (
    <section className="title" data-aos="fade-up">
      <div className="title__div">
        <div className="title__profile"></div>
        <div className="title__container">
          <h2 className="title__bio">
            <span className="emphasis">Meu nome é Gabriel Ribeiro e construo projetos para a web</span>
          </h2>
          <h3 className="title__subsection">
            <span>Sou técnico em Informática para a Internet, estou cursando ADS na Unintere estudando React e frameworks para JavaScript.</span>
          </h3>
          <ul className="title__network">
            <li className="title__network__item"><a href="https://github.com/gabriersdev/" target="_blank">Github<span
              className="title__network__item__icone"></span></a></li>
            <li className="title__network__item"><a href="https://www.linkedin.com/in/gabrielmpribeiro"
              target="_blank">Linkedin<span className="title__network__item__icone"></span></a></li>
            <li className="title__network__item"><a href="https://www.behance.net/gabrielmpribeiro"
              target="_blank">Behance<span className="title__network__item__icone"></span></a></li>
            <li className="title__network__item"><a href="https://gabriersdev.github.io/resources?resource=resume"
              target="_blank">Currículo<span className="title__network__item__icone"></span></a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
