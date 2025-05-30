import React from 'react'
import { LuBookmarkCheck } from "react-icons/lu";
import { MdGroups } from "react-icons/md";
import { BiGroup } from "react-icons/bi";

function Count() {
    return (
        <>
        
<div className='h-120 w-full p-6 '>

<div className=' flex-col pl-80 justify-center items-center mt-4 '>
<div className='text-2xl'>
    
    <p >Serving up the most Powerful hospitality  reservation Palteform for</p>
                <p className='pl-60'> cafes and Coffeeshops</p>
    </div>
    <div className='text-xl mt-3'>
        <p>With best i class local customer support around the clock,no commision fess and </p>
        <p className='pl-60'>control your customer database </p>
    </div>
</div>
    <div className=' flex justify-between items-center gap-6 px-10 py-4 mt-25 '>
 <div className="bg-gray-300  flex  justify-between items-center px-10 py-4 w-75 rounded-2xl">
    <div><MdGroups size={40}/></div>
   <div className='text-right'>
   <p className='text-2xl pl-5'>11,000+</p>
    <p className='pl-5'>customers</p>
   </div>
 </div>

<div className="bg-gray-300  flex  justify-between items-center px-10 py-4 w-75 rounded-2xl">
    <div><LuBookmarkCheck size={40}/></div>
   <div className='text-right'>
   <p className='text-2xl pl-5'>1,40,000+</p>
    <p className='pl-5'>Booking per month</p>
   </div>
 </div>

 <div className="bg-gray-300  flex  justify-between items-center px-10 py-4 w-75 rounded-2xl">
    <div><BiGroup size={40}/></div>
   <div className='text-right'>
   <p className='text-2xl pl-5'>40+</p>
    <p className='pl-5'>Integrated partner</p>
   </div>
 </div>
     </div>
    </div>
        </>
    )
}

export default Count
