import React from 'react'
import Navbar from './Navbar'
import HomePage from '../Pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import Favourite from '../Pages/Favourite';
const MainRoute = () => {
  return (
    <div>
        {/* <Navbar/> */}
        
        <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/favourite" element={<Favourite/>}/>
    </Routes>
    </div>
  )
}

export default MainRoute