import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Messages from "../pages/Messages";
import { useSelector } from "react-redux";
import Login from "../pages/Login";
import Categories from "../pages/Categories";
import Projects from "../pages/Projects";
import DealerShips from "../pages/DealerShips";
import References from "../pages/References";
import Admins from "../pages/Admins";

const AppRouter = () => {
    const user = useSelector((state) => state.user.user);
    return(
        <Routes>
            <Route path="/" element={ user ? <Dashboard /> : <Navigate to="/login" />}/>
            <Route path="/messages" element={user ? <Messages /> : <Navigate to="/login"/>} />
            <Route path="/categories" element={user ? <Categories /> : <Navigate to="/login"/>} />
            <Route path="/dealerships" element={user ? <DealerShips /> : <Navigate to="/login"/>} />
            <Route path="/projects" element={user ? <Projects /> : <Navigate to="/login"/>} />
            <Route path="/references" element={user ? <References /> : <Navigate to="/login"/>} />
            <Route path="/admins" element={user ? <Admins /> : <Navigate to="/login"/>} />
            <Route path="/login" element={user ? <Navigate to={"/"} /> : <Login />} />
        </Routes>
    );
}

export default AppRouter;