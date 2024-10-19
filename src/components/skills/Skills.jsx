import './skills.css'
import Util from '../../Util.js';
import PropTypes from 'prop-types'

export default function Skills({ data }) {
  return (
    <section className="skills" id="skills">
      <h3 className="skills__title">Skills</h3>
      <div className="skills__line" data-target="load-content">
        {
          Util.getUniqueElements(data, 'name').map((skill, i) => {
            return (
              <div key={i} className="skills__box hover-scale" data-aos="fade-right">
                <ul>
                  <li className="skills__img"><img src={skill.img} alt={skill.alt} /></li>
                  <li className="skills__name">{skill.name}</li>
                </ul>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

Skills.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
}
