import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home.jsx"
import About from "./Pages/About/About.jsx"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
