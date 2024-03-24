import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home" ;
import About from "./pages/About" ;
import Contact from "./pages/Contact" ;
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

