import './App.css';
import Product from './pages/Product';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Details from './pages/Details';
import { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Products />}/>
          <Route path="/Detail/:id" element={<Details />} />
        </Routes>
      </Router>

      {/* <Details></Details> */}
    </div>
  );
} 

export default App;
