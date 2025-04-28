import './services.css'
import Util from '../../old/Util.js'
import PropType from 'prop-types'

export default function Services({ data }) {
  return (
    <section className="services" id="services" data-element="ref-contact">
      <h2 className="services__title">Serviços</h2>
      <div className="services__content">
        <ul className="services__content__list" data-target="load-content">
          {
            Util.getUniqueElements(data, 'name', 'no-sorted').map((service, i) => {
              return (
                <li key={i} className="list-item hover-scale" data-aos="fade-up">
                  <div className="list-item__header">
                    <img className="list-item__header__icon" src={service.img} alt={service.alt} />
                    <h3 className="list-item__header__title">{service.name}</h3>
                  </div>
                  <div className="list-item__body">
                    <p className="list-item__body__description">{service.description}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section >
  )
}

Services.propTypes = {
  data: PropType.arrayOf(PropType.shape({
    img: PropType.string.isRequired,
    alt: PropType.string.isRequired,
    name: PropType.string.isRequired,
    description: PropType.string.isRequired
  }))
}
