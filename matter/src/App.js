import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Details from "./pages/Details";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import Index from "./components/Index";
import { useEffect, useState } from "react";

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
