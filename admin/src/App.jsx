import React, { useEffect} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import AppRouter from './router/AppRouter'
import { getCategories } from "./redux/categorieSlice"
const App = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/categorie`,{
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if(response.status === 403 || response.status === 401){
        message.error("Yetkiniz yok!")
        navigate("/admin");
      }

      if (response.ok) {
        const json = await response.json();
        dispatch(getCategories(json));
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCategories()
  }, [])
  return (
    <div className='App'>
      <Router>
        <div className='flex'>
          <Navbar />
          <AppRouter />
        </div>
        
      </Router>
    </div>
  )
}

export default App