import { useEffect } from 'react'
import AOS from 'aos'

import Menu from './components/menu/Menu'
import Title from './components/title/Title'
import About from './components/about/About'
import Main from './components/main/Main'
import Dialog from './components/dialog/Dialog'
import Footer from './components/footer/Footer'
import { useLocation } from 'react-router-dom'

export default function Principal() {
  const upPage = (e) => {
    e.preventDefault
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  if (queryParams.get('or').includes('freelancer')) document.querySelector('html').classList.add('no-contact')
  else console.log("%cContrate-me!\nhttps://www.linkedin.com/in/gabrielribeirodev/\ndevgabrielribeiro@gmail.com", "font-size: 2rem; color: #FFF; background-color: #2631FF; font-family: sans-serif;")


  useEffect(() => {
    document.querySelectorAll('a').forEach(link => link.setAttribute('rel', 'noopener noreferrer'));
    AOS.init()
  }, [])

  return (
    <>
      <Menu fnc={upPage} />
      <Title />
      <About />
      <Main />
      <Dialog />
      <Footer fnc={upPage} />
    </>
  )
}
