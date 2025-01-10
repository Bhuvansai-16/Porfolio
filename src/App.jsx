<<<<<<< HEAD
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar'; // Ensure Navbar is imported
import Home from './Home';
import About from './About';
import Projects from './Projects';
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
=======
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './Home';
import About from './About';
import Projects from './projects';
import Contact from './Contact';
import Games from './Games';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Suspense
            fallback={<div style={{ color: "white", textAlign: "center" }}>Loading...</div>}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Games" element={<Games />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
>>>>>>> 5a7a55546c51f4b79b7ce2f7aff24278c8aca90d
