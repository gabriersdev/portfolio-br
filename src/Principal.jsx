import {useEffect} from 'react'
import AOS from 'aos'

import Menu from './components/menu/Menu'
import Title from './components/title/Title'
import About from './components/about/About'
import Main from './components/main/Main'
import Dialog from './components/dialog/Dialog'
import Footer from './components/footer/Footer'
import {useLocation} from 'react-router-dom'

export default function Principal() {
  const upPage = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  try {
    const location = useLocation();
    let queryParams = null;

    if (location.search) queryParams = new URLSearchParams(location.search);
    
    // Verificar se queryParams não é null, se o parâmetro 'or' existe e se ele contém 'freelancer'
    if (queryParams) if (queryParams.get('or').includes('freelancer')) document.querySelector('html').classList.add('no-contact')
    // Exibição no-contact
    else if (String(document.referrer).includes("99") || document.referrer === 'https://www.99freelas.com.br/') {
      document.querySelector('html').classList.add('no-contact')
    } else console.log("%cContrate-me!\nhttps://www.linkedin.com/in/gabrielribeirodev/\ndevgabrielribeiro@gmail.com", "font-size: 2rem; color: #FFF; background-color: #2631FF; font-family: sans-serif;")
  } catch (error) {
    console.log('Ocorreu um erro ao tentar verificar os parâmetros passados. %s', error);
  }

  useEffect(() => {
    // Reforçando - Exibição no-contact
    if (!document.querySelector('html').classList.contains('no-contact') && (String(document.referrer).includes("99") || document.referrer === 'https://www.99freelas.com.br/')) {
      document.querySelector('html').classList.add('no-contact')
      document.querySelector('html').classList.value = 'no-contact'
    }

    document.querySelectorAll('a').forEach(link => link.setAttribute('rel', 'noopener noreferrer'));
    AOS.init()

    // Verificar se #[id] existe e rolar a página até ele
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({behavior: 'smooth'})
      }
    }
  }, [])

  return (
    <>
      <Menu fnc={upPage}/>
      <Title/>
      <About/>
      <Main/>
      <Dialog/>
      <Footer fnc={upPage}/>
    </>
  )
}
