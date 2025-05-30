import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const cards = [
  {
    image: 'tea.jpg',
    title: 'Tea',
    price: 25, 
  },
  {
    image: 'coffe.jpg',
    title: 'Coffee',
    price: 55,
  },
  {
    image: 'soda.jpg',
    title: 'Soda',
    price: 55,
  },
  {
    image: 'dog.jpg',
    title: 'Shop',
    price: 95,
  },
  {
    image: 'tea.jpg',
    title: 'Tea',
    price: 25,
  },
  {
    image: 'coffe.jpg',
    title: 'Coffee',
    price: 55,
  },
  {
    image: 'soda.jpg',
    title: 'Soda',
    price: 55,
  },
  {
    image: 'dog.jpg',
    title: 'Shop',
    price: 95,
  },
];
function Item() {
  const navigate=useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

const handlePayment=()=>{
  navigate("/payment", { state: { total: totalPrice } });
}

  const handleremovePrice=(price,title)=>{
      const newprice=totalPrice-price;
      setTotalPrice(newprice);

      toast.warning(`Removed ${title}! Total: ${newprice}`, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        theme: 'dark',
      });
  }

  const handleaddPrice = (price, title) => {
    const newTotal = totalPrice + price;
    setTotalPrice(newTotal);

    toast.success(`Added ${title}! Total: $${newTotal}`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      theme: 'dark',
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-cover bg-center
    footer w-full h-fit  justify-between
    bg-white
    ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-500 hover:shadow-xl transition-shadow duration-300"
        >
    
          <img className="w-full h-48 object-cover" src={card.image} alt={card.title} />

          <div className="p-4 ">
            <h2 className=" ml-25 text-xl font-extrabold text-white">{card.title}</h2>
            <p className=" ml-25 mt-2 font-semibold text-white">Price: ${card.price}</p>
            <button
              className=" ml-7 mr-20 mt-2 px-4 py-2 bg-neutral-700 text-white rounded"
              onClick={() => handleaddPrice(card.price, card.title)} 
            > Buy
            </button>
            <button
              className="  mt-2 px-4 py-2 bg-neutral-700 text-white rounded"
              onClick={() => handleremovePrice(card.price, card.title)} 
            > Remove
            </button>
          </div>
        </div>
      ))}

      <div className="col-span-full text-right text-black text-xl font-semibold mt-4 pr-150">
        {/* Total Price: ${totalPrice}  */}
        <button onClick={handlePayment} className=' flex-col p-2 rounded-xl bg-green-400'>
        <Link to="/home ">Payment</Link></button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Item;
