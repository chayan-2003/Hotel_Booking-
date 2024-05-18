import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const [credentials, setCredentials] = useState({
      username: undefined,
      password: undefined,
    });
  
    const { loading, error, dispatch } = useContext(AuthContext);
  
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
  
    const handleClick =async (e) => {
      e.preventDefault();
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("/api/auth/login", credentials);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/")
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      }
    };
  

    return (<div>
    <div className="head flex justify-center text-4xl font-bold text-blue-800 mt-6
    ">
        LOGIN TO YOUR ACCOUNT   
        </div>
        
    <div className="login flex flex-col items-center justify-center ">
        <div className="lContainer mt-52"></div>
            <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput text-sm text-gray-base mr-3 py-7 px-4 h-2 border border-gray-600 rounded mb-4" />
            <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput text-sm text-gray-base mr-3 py-7 px-4 h-2 border border-gray-600 rounded mb-2" />
            <button disabled={loading} onClick={handleClick} className="lButton bg-sky-600 text-white w-28 h-9 text-center mt-4 rounded-md border-2 text-sm font-semibold cursor-pointer">Login</button>
            {error && <h1>{error.message}</h1>}
            </div>
            </div>
       )
}

export default Login;