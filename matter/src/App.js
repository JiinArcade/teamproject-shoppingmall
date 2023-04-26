import './App.css';
import Product from './pages/Product';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Details from './pages/Details';
import { useEffect,useState } from 'react';
import Index from './components/Index';
import Login from './pages/Login';


// import Index from './components/Index';
// import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Index />
      <Login></Login>
    </div>
  );
} 

export default App;
