import React from 'react'; 
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <footer className="footer bg-gray-800  w-full h-fit p-5 flex justify-between
     bg-[url('/footer.jpg')] 
     bg-cover bg-center
    ">
        <div className='h-50 w-50 border-white border-2 overflow-hidden rounded-full flex justify-start  '>
            <img src='coffe.jpg' />
        </div>

      <div className="footer-overlay flex-col  mr-15 ml-7 mt-3 list-none ">
        <ul className="footer-list text-white font-semibold gap-2">
          <li>About Us</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-overlay  mr-15 ml-7 mt-3 list-none ">
        <p className="footer-list text-white list-none">
         <li className='font-extrabold' >Location</li>
         <li className='font-semibold'>One Drive Orange,CA</li>
         <li className='font-semibold'>Divene,CA 345201</li>
        </p>
        <p className="footer-list text-white list-none mt-3">
         <li className='font-extrabold' >Rinkal Health center</li>
         <li className='font-semibold'>9401 sardar Road</li>
         <li className='font-semibold'>inravine,CA 92618</li>
        </p>
      </div>
      <div className="flex flex-col items-end text-white gap-2 mt-40">
  <p>Follow Us</p>
  <div className="flex gap-2 cursor-pointer">
    <a><BsFacebook size={20} /></a>
    <a><AiFillInstagram size={20} /></a>
    <a><FaYoutube size={20} /></a>
  </div>
  <a className='text-blue-300' >Suppored@cafe4me.com</a> 
</div>

    </footer>
 <div className='border-b-4 border-black w-full '></div> 
<div className='bg-gray-800 h-fit w-full -10'> 
<p className=' text-white pl-175 '>@2025Kenil</p> 
</div>
  </> 
  );
};

export default Footer;
