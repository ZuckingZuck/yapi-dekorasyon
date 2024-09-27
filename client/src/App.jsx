import React, { useEffect } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './router/AppRouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { getCategories } from './redux/categorieSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const App = () => {
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/client/categorie`);
      if (response.status === 200) {
        dispatch(getCategories(response.data));
      }
    } catch (error) {
      console.error('Kategorileri alırken hata oluştu:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [])

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