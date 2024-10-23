import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Principal from './Principal'
import Redirect from './Redirect'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    console.log(
      "%cContrate-me!\nhttps://www.linkedin.com/in/gabrielribeirodev/",
      "font-size: 2rem; color: #FFF; background-color: #2631FF; font-family: sans-serif;",
    )
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio/" exact element={<Principal />} ></Route>
          <Route path="/portfolio/redirect/" element={<Redirect />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
