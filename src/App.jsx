import './App.css'
import Menu from './components/menu/Menu'
import Title from './components/title/Title'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { useState } from 'react'

function App() {
  const upPage = (e) => {
    e.preventDefault
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useState(() => {

  }, [])

  return (
    <>
      <Menu fnc={upPage} />
      <Title />
      <Main />
      <Footer fnc={upPage} />
    </>
  )
}

export default App
