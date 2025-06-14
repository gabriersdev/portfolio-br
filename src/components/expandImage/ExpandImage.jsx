import PropTypes from 'prop-types';
import './expandImage.css';
import {useContext} from "react";
import {Theme} from "../ThemeContext.jsx";

const ExpandImage = () => {
  const {dialog, expandImageInfos} = useContext(Theme);
  const {src, alt} = expandImageInfos;

  if (dialog.current) {
    dialog.current.addEventListener('close', (e) => {
      e.preventScroll = true;
      document.body.style.overflow = 'initial';
    })
  }

  return (
    <dialog ref={dialog} className="expandImage" onClick={() => {
      dialog.current.close();
    }}>
      <button className="expandImage__btn" title={"Fechar"} onClick={() => {
        dialog.current.close();
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFF" className="bi bi-x-lg"
             viewBox="0 0 16 16">
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
      </button>
      <img src={src || '#'} alt={alt || '#'} className="expandImage__img" onClick={(e) => e.stopPropagation()}/>
    </dialog>
  )
}

ExpandImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
}

export default ExpandImage;
