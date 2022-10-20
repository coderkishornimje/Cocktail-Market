import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='register' element={<Register/>} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='cocktail/:id' element={<SingleCocktail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;