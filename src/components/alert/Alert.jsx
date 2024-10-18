import './alert.css';
import PropType from 'prop-types';

export default function Alert({ type, message }) {
  return (
    <div className={`alert alert-${type}`} role="alert">
      <strong className="text">{message}</strong>
    </div>
  )
}

Alert.propTypes = {
  type: PropType.string.isRequired,
  message: PropType.string.isRequired
}
