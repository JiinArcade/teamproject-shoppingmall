import React from 'react'
import './Main.css'
import Products from '../pages/Products'
import Details from '../pages/Details'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const index = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Products />}/>
          <Route path="/Detail/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  )
}

export default index

