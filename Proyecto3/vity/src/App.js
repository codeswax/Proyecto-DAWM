import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Splash from './pages/splash/Splash'
import Menu from './pages/menu/Menu'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
