// import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router'
import './App.css'
import Home from './component/Home'
import Signin from './component/Signin'
import Signup from './component/Signup'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
