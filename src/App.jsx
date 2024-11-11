import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Principal from './Principal'
import Redirect from './Redirect'

function App() {
  return (
    <>
      <BrowserRouter basename='/portfolio'>
        <Routes>
          <Route path="/" element={<Principal />} ></Route>
          <Route path="/redirect/" element={<Redirect />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
