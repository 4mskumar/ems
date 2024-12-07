import React from 'react'
import Nav from './components/Nav'
import Hero from './pages/Hero'
import Footer from './components/Footer'
import Recomeded from './components/Recomeded'
import Popular from './components/Popular'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import TeachOn from './pages/TeachOn'
import GetStarted from './pages/GetStarted'
// import Hero from './components/Corousel'

const App = () => {
  return (
    <BrowserRouter>
      <div>
      <Nav />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/' element={<Recomeded />} />
          <Route path='/' element={<Popular />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/teach' element={<TeachOn />} />
          <Route path='/getstarted' element={<GetStarted />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
