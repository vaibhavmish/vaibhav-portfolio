import Navbar from './components/Navbar.js';
import HomePage from './components/HomePage.js';
import Footer from './components/Footer.js';
import Projects from './components/Projects.js';
import Contact from './components/ContactPage.js';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className={`App Bg`}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/HomePage" element={<HomePage/>} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
