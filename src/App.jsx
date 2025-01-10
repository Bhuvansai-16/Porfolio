
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar'; // Ensure Navbar is imported
import Home from './Home';
import About from './About';
import Projects from './projectss';
import Contact from './Contact';
import Games from './Games';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar /> {/* Navbar is rendered here */}
        <main style={{ flex: 1 }}>
          <Suspense fallback={<div style={{ color: "white", textAlign: "center" }}>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/games" element={<Games />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;

