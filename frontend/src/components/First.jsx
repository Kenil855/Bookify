import React from 'react'
import { useNavigate } from 'react-router-dom'

function First() {
    const navigate=useNavigate();

    const  move=()=>{
        navigate("/reservation")
    }
    return (
        
        <>
        <div className=" justify-between pb-3 md:flex-col
         w-full h-fit p-5 flex 
         bg-[url('/pink.jpg')]  bg-cover bg-center font-semibold  text-white">
          <h1 className='text-2xl '>CAFES</h1>
          <h1 className='text-4xl'>All-in-one Table Reservation</h1>
          <h1 className='text-4xl'>Platform</h1>
          <h1 className='text-4xl'>for Cafes</h1>
          <p className='mt-2'>we provide cafe owners and managers with the </p>
          <p>  tools to operate efficiently, keep coast down and </p>
          <p>table full.</p>
          <button onClick={move} className=' mt-5 p-3 w-max rounded-3xl bg-white text-pink-600'>Book a Demo</button>
       </div>
        </>
    )
}

export default First
