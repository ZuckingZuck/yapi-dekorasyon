import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/userSlice";
import { message } from "antd";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    if (response.status !== 200) {
      message.error("Giriş başarısız!");
    }

    if (response.ok) {
      const user = await response.json();
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(userLogin(user));
      navigate("/");
    }
  };
  
  return (
    <div className="bg-gray-800 min-h-screen w-full text-white flex flex-col items-center justify-center">
      <div className="max-w-lg w-full p-5">
        <div className="flex flex-col items-center mb-6">
          <img src="https://www.yapidekorasyon.com.tr/wp-content/uploads/2021/08/yapi-dekorasyon.png" alt="login" className="w-52" />
          <h1 className="text-2xl font-bold my-2">Admin / Giriş Yap</h1>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">E-Posta Adresi</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              className="bg-black text-green-700 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-green-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1">Parola</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              className="bg-black text-green-700 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-green-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-color bg-green-600 text-white py-2 rounded-lg duration-200 focus:outline-none focus:ring focus:border-green-500 hover:bg-green-700"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
