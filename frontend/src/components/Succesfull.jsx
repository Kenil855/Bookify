import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Succesfull() {
    const navigate=useNavigate();
    const [time,setTime]=useState(10);
      
useEffect(() => {
        toast.success('Reservation successful', {
          position: 'top-center',
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          theme: 'dark',
        });
      }, []);

 useEffect(() => {
        // Stop when count reaches 0
        if (time <= 0){
            navigate("/home")
            return;
        } 
    
        const timer = setInterval(() => {
          setTime(prevTime => prevTime - 1);
        }, 1000); // 1 second
    
        // Cleanup interval when component unmounts or count updates
        return () => clearInterval(timer);
      }, [time]);
      
    return (
        <>
        <div  className="bg-cover bg-center justify-center" >
        <img src='succes.png' className='ml-95 h-150  w-180'/>
            <p className='ml-95 text-3xl font-semibold'>You can Move to Home Page at {time} Second</p>
        </div>
        </>
    )
}

export default Succesfull;
