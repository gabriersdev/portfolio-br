import './academic.css';
import ProtoType from 'prop-types';
import Util from '../../Util';

export default function Academic({ data }) {
  return (
    <section className="academic" id="academic">
      <h2 className="academic__title">Formação Profissional e Acadêmica</h2>
      <div className="academic__courses" data-target="load-content">
        {
          Util.getUniqueElements(data.toSorted((a, b) => new Date(a.start) < new Date(b.start)), 'name', 'no-sorted').map((academic, i) => {
            return (
              <div key={i} className="academic__courses__box" data-aos="fade-up">
                <ul className="academic__courses__list">
                  <li className="academic__courses__item__img"><img src={academic.img} alt={academic.alt} style={academic.style || {}} /></li>
                  <li className="academic__courses__item__title"><h4>{academic.name}</h4></li>
                  <li className="academic__courses__item__subtitle"><p>{academic.school}</p></li>
                  <li className="academic__courses__item__subtitle"><p>{new Date(academic.start).getFullYear()} - {academic.finished ? new Date(academic.finish).getFullYear() : 'Em andamento'}</p></li>
                </ul>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

Academic.propTypes = {
  data: ProtoType.arrayOf(ProtoType.shape({
    img: ProtoType.string.isRequired,
    alt: ProtoType.string.isRequired,
    name: ProtoType.string.isRequired,
    school: ProtoType.string.isRequired,
    start: ProtoType.string.isRequired,
    finish: ProtoType.string,
    finished: ProtoType.bool.isRequired
  }))
}
