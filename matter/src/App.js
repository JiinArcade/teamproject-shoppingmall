import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Details from './pages/Details';
import Products from './pages/Products';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/Banner' element={<Banner></Banner>} /> */}
          <Route path='/' element={<Products />}/>
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
