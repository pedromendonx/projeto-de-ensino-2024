import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Menu/Home';
import About from './componentes/Menu/About';
import Contact from './componentes/Menu/Contact';
import Menu from './componentes/Menu/Menu';
import Receita from './componentes/Menu/Receita';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        {/* Menu de navegação */}
        <Menu />

        {/* Rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipe/:id" element={<Receita />} />
        </Routes>

        {/* Footer fixo */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
