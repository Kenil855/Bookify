// Login.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { GrTwitter } from "react-icons/gr";

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmitted = async (e) => {
    e.preventDefault(); // prevent default form refresh

    if (!name || !password) {
      toast.warn("Please fill the full form", {
        position: "top-center",
        theme: "dark", // fixed spelling from 'theame'
        autoClose: 2000,
      });
      return;
    }

     try {
          const { data } = await axios.post(
            "http://localhost:4000/add",
             {name,password },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
         
          toast.success(`User  login successfully`, {
            position: "top-center",
            theme: "dark", // fixed spelling from 'theame'
            autoClose: 2000,
          });
           // Navigate to /home after delay
    setTimeout(() => {
      navigate("/home"); 
    }, 2000);
     // Navigate to success page after data is successfully submitted
        } catch (error) {
          console.error('Error submitting reservation:', error.response?.data, error.message);
          toast.error(error.response?.data?.message || 'User name all ready present .', {
            position: 'top-center',
            theme: 'dark',
            autoClose: 2000,
          });
        }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <form
      onSubmit={handleSubmitted}
      className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md border border-gray-300"
    >
      <h3 className="text-3xl font-bold text-center text-gray-700 mb-6">
        Login
      </h3>
  
      <div className="mb-4">
        <label className="block text-gray-600 mb-1">Username</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
  
      <div className="mb-6">
        <label className="block text-gray-600 mb-1">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
  
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Login
      </button>
      <div className="flex items-center justify-center mt-3 space-x-6">
  <a href="/google.com"><FcGoogle size={30} /></a>
  <a href="/twiter.com"><GrTwitter size={30} /></a>
</div>
  <a href='#' className='text-blue-300 pl-12 mt-2 '>Signup</a>
  <a href='#' className='text-blue-300 pl-32  mt-2'>Forgot Password</a>
    </form>
  </div>
  
  );
}

export default Login;
