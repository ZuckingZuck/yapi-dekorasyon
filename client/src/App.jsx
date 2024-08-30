import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './router/AppRouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <AppRouter />
        <Footer />
      </Router>
    </div>
  )
}

export default App