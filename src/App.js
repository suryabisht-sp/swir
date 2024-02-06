import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home.jsx"
import About from "./Pages/About/About.jsx"
import Pokedex from './Pages/Home/Pokidex.jsx';
import PokemonDetails from './component/PokemonDetails.jsx';
import RickDetails from './component/RickDetails.jsx';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon' element={<Pokedex />} />
                <Route path='/pokemon/:name' element={<PokemonDetails/>} />
                 <Route path='/rick&morty/:id' element={<RickDetails/>} />
          <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
