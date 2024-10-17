import logo from './logo.svg';
import Form from './compants/Form';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import './App.css';
import Affichage from './compants/Affichage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/Affichage' element={<Affichage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
