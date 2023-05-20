import './App.css';
<<<<<<< HEAD
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Details from './pages/Details';
import Products from './pages/Products';
=======
import Product from './pages/Product';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Details from './pages/Details';
import Index from './components/Index';
import { useEffect,useState } from 'react';
>>>>>>> 0aa163fbc258c60e6fc21d6fc86771d9f7385f30


// import Index from './components/Index';
// import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Index />
    </div>
  );
} 

export default App;
