import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import IndexPage from './components/IndexPage';
import Banner from './components/Banner';
import Details from './pages/Details';
import Products from './pages/Products';
import Product from './pages/Product';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Banner></Banner>} /> */}
          <Route path='/' element={<Products />}/>
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
