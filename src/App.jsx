import React from 'react';
import Home from './Home.jsx';
import Portfolio from './Portfolio.jsx';
import About from './About.jsx';

function App() {
  const renderPage = () => {
    const path = window.location.pathname;
    if (path === '/portfolio') return <Portfolio />;
    if (path === '/about') return <About />;
    return <Home />; // Default to Home
  };

  return (
    <div>
      <nav>
        <a href="/" className="nav-link">Home</a>
        <a href="/portfolio" className="nav-link">Portfolio</a>
        <a href="/about" className="nav-link">About</a>
      </nav>
      <div>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
