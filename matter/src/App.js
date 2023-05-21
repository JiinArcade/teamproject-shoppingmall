import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Details from "./pages/Details";
import Products from "./pages/Products";

import Index from "./components/Index";
// import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;
