import { useEffect, useState } from 'react'
import './experience.css'
import Alert from '../alert/Alert'
import Util from '../../Util.js';

export default function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/gabriersdev/c2136e42374bf2b78eac871b840543ad/raw/').then((response) => {
      return response.json();
    }).then((ret) => {
      if (!Array.isArray(ret.projects)) {
        throw new Error('A resposta da API não é válida');
      }
      else if (ret.projects == 0) {
        throw new Error('Nenhum projeto encontrado');
      }
      setExperiences(ret.projects);
    }).catch((error) => {
      try {
        // Init Lib de Scroll Animation
      } catch (error) {
        console.error(error);
      } finally {
        switch (error.message) {
          case 'A resposta da API não é válida':
          case 'Nenhum projeto encontrado':
          case 'NetworkError when attempting to fetch resource.':
            setAlert(error.message);
            break
          default:
            setAlert(`Erro não mapeado: ${error.message}!`);
            console.error(error);
            break;
        }
      }
    });
  }, [])

  return (
    <section className="experience" id="experience">
      <h2 className="experience__section__title">Experiência Profissional</h2>
      <div data-target="load-content">
        {
          Util.getUniqueElements(experiences.filter(e => e.visible && e.active), 'name').reverse().map((project, i) => {
            return (
              <div key={i} className="experience__box" data-aos="fade-up">
                <img className="experience__midia hover-scale" loading="lazy" src={project.img || 'https://via.placeholder.com/600x400.png?text=Imagem...'} alt={`Captura de tela do projeto ${project.name.trim()}`} style={ project.img.includes('https://opengraph.githubassets.com') ? {aspectRatio: "initial" } : {} } />
                <div className="experience__info">
                  <h2 className="experience__title">{project.name.trim()}</h2>
                  <h3 className="experience__text">{project.subtitle.trim()}</h3>
                  <h3 className="experience__text">{project.description.trim()}</h3>
                  <div className="experience__description">
                    {project.link && project.link.length > 0 && project.link !== "#" ? <span className="experience__repo"><a href={project.link.trim()} target="_blank"><button className="experiencia__botao--repo">Repositório</button></a></span> : ''}
                    {project.demo && project.demo.length > 0 && project.demo !== '#' ? <span className="experience__demo"><a href={project.demo.trim()} target="_blank"><button className="experiencia__botao--demo">Ver demo</button></a></span> : ''}
                  </div>
                </div>
              </div>
            )
          })
        }
        {alert ? <Alert type="danger" message={alert} /> : null}
      </div>
    </section>
  )
}
