import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Capabilities from './components/Capabilities';
import Testimonial from './components/Testimonial';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Capabilities />
      <Testimonial />
    </>
  );
};

export default App;
