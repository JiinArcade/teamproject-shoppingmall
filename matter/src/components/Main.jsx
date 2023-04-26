import React from 'react'
import './Main.css'
import Products from '../pages/Products'
import Details from '../pages/Details'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const Main = () => {
  return (
      <Router>
        <Routes>
          <Route path='/Products' element={<Products />}/>
          <Route path="/Detail/:id" element={<Details />} />
        </Routes>
      </Router>
  
  )
}

export default Main;

