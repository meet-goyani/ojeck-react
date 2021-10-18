import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Capabilities from './components/Capabilities';
import Testimonial from './components/Testimonial';
import Register from './components/Register';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Capabilities />
      <Testimonial />
      <Register />
      <Footer />
    </>
  );
};

export default App;
