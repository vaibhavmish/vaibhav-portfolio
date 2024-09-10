import Navbar from './components/Navbar.js';
import HomePage from './components/HomePage.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/HomePage" element={<HomePage/>} />
    </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
