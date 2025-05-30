import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import {useNavigate } from 'react-router-dom';
import axios from "axios";

function Reservation() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  // Form validation to ensure required fields are filled in.
  const validateForm = () => {
    if (!name || !email || !phone || !date || !time) {
      toast.error("All fields are required.");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleClick = async (e) => {
    e.preventDefault();  // Prevent form submission
    if (!validateForm()) return;  // Check if form is valid before proceeding

    try {
      const { data } = await axios.post(
        "http://localhost:4000/res",
        { name, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success("Rservation Succesfully Completed", {
        position: "top-center",
        theme: "dark", 
        autoClose: 4000,
      });

      setName("");
      setPhone();
      setEmail();
      setTime();
      setDate();
      
      setTimeout(()=>{
        navigate("/success"); 
      },4000)
      // Navigate to success page after data is successfully submitted
    } catch (error) {
      const errorMessage = error.response?.data?.error || "An error occurred. Please try again.";
      toast.error(errorMessage);
      console.error("Error details:", {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
        code: error.code,
      });
    }
  };
    return (
        <>
        <div className=" justify-between pb-3 md:flex-col
         w-full h-fit p-5 flex 
         bg-[url('/wall.jpg')]  bg-cover bg-center ">
        
        <div className="home flex justify-start pt-4">
            <img className='w-220 h-140  rounded-full border-2 border-b-black' 
            src='table.jpg'alt='reserved.png'/>

<div className=' w-full flex-col justify-end  '>
        <p className='text-gray-600 mb-2 text-2xl h-fit w-fit  mt-7 justify-right ml-85 font-extrabold '>MAKE YOUR RESERVAION...</p>
        <div className=" ml-80 mr-20 mt-15 rounded-2xl form bg-blue-100 border-2 h-fit w-70 p-5   border-zinc-500 ">
        
         <p>Enter Your Name:</p><input
          type="text"
          name='name' 
         placeholder='Enter your name'
         onChange={(e) => setName(e.target.value)}
         className=' h-5 rounded-2xl bg-white p-3 '/>

         <p>Email:</p><input type="text"
         name='email' 
         placeholder='Enter your Email'
         onChange={(e) => setEmail(e.target.value)}
         className='h-5 rounded-2xl bg-white p-3 '/><br></br>

         <p>Date:</p><input type="date" 
         name='date'
         onChange={(e) => setDate(e.target.value)}
         className=' h-5 rounded-2xl bg-white p-3 '/><br></br>

         <p>Time:</p><input type="time"
         name='time'
         onChange={(e) => setTime(e.target.value)}
         className='h-5 rounded-2xl bg-white p-3 '/><br></br>

         <p>Phone:</p><input type="phone"
         name='time'
         onChange={(e) => setPhone(e.target.value)}
         placeholder='Enter your Phone'
         className='h-5 rounded-2xl bg-white p-3 '/><br></br>

         <button className='px-5 mt-4 ml-18 bg-gray-500 ' 
         onClick={handleClick}>Submit</button>
    
        </div>
        </div>
      </div>
  </div>
        </>
    )
}

export default Reservation
