import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useEffect} from "react"

import Principal from './Principal'
import Redirect from './Redirect'

function App() {
  useEffect(() => {
    if ("serviceWorker" in navigator && window.location.hostname !== "localhost") {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(() => console.log("Service Worker registrado com sucesso!"))
        .catch((err) => console.error("Erro ao registrar o Service Worker:", err));
    }

    const defineHeigthWidth = () => {
      document.querySelectorAll('img').forEach(img => {
        img.setAttribute('width', `${img.clientWidth}px`)
        img.setAttribute('height', `${img.clientHeight}px`)
      })
    }

    // Define width e height para as imgs
    window.addEventListener("resize", defineHeigthWidth)
    document.addEventListener("DOMContentLoaded", defineHeigthWidth)
  }, []);

  return (
    <>
      <BrowserRouter basename='/portfolio'>
        <Routes>
          <Route path="/" element={<Principal/>}></Route>
          <Route path="/redirect/" element={<Redirect/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
