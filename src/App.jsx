import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Principal from './Principal'
import Redirect from './Redirect'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio/" element={<Principal />} ></Route>
          <Route path="/portfolio/redirect/" element={<Redirect />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
