import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowCircleRight } from "react-icons/fa";

function About() {
    const navigate=useNavigate();
    const handleClick=(e)=>{
        e.preventDefault();
        navigate("/item")
    }
    return (
        <div className='flex  justify-between p-6 h-140 w-full bg-gray-300'>
<div className='justify-left flex-col  w-2/5'>
    <p className='text-4xl pb-4 pt-4 ' >About us</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur natus voluptates hic.
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa similique hic dolorum deleniti tenetur. Sint repudiandae soluta nihil natus recusandae saepe, explicabo eaque inventore. Laborum tempore eligendi modi labore eaque?   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo excepturi delectus eligendi.
    </p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ut?</p>
    <p className='font-semibold text-2xl pt-14'>Explore Menu </p>
    <button onClick={handleClick}><FaArrowCircleRight   size={60} className='pl-6' /></button>
    </div >
  <div className=' border-2 rounded-full overflow-hidden justify-right  h-130 w-130'>
 <img src='table.jpg'/>
    </div>  
</div>
        
    )
}

export default About
   
