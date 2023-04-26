import './App.css';
import {
  Routes,
  Route,
  Router,
} from "react-router-dom";
import Index from './components/Index';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
