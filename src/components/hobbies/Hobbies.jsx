import './hobbies.css';
import Util from '../../old/Util.js';
import PropTypes from 'prop-types';

export default function Hobbies({ data }) {
  return (
    <section className="hobbies" id="hobbies">
      <h3 className="hobbies__title">Hobbies</h3>
      <div className="hobbies__line" data-target="load-content">
        {
          Util.getUniqueElements(data, 'name').map((hobbie, i) => {
            return (
              <div key={i} className="hobbies__box hover-scale" data-aos="fade-right">
                <ul>
                  <li className="hobbies__img"><img src={hobbie.img} alt={hobbie.alt} /></li>
                  <li className="hobbies__name">{hobbie.name}</li>
                </ul>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

Hobbies.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
}
