import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Splash from './pages/splash/Splash'
import Menu from './pages/menu/Menu'
import Travel from './pages/travel/Travel'
import History from './pages/history/History'
import Profile from './pages/profile/Profile'
import HistoryDetails from './pages/historydetails/HistoryDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/travel' element={<Travel />} />
        <Route path='/history' element={<History />} />
        <Route path='/history/historydetails/:id' element={<HistoryDetails />} />
        <Route path='/travel' element={<Travel />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
