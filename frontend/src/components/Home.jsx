// Home.jsx
import React from 'react';
import Navbar from './Navbar';
// import Item from './Item';
import Reservation from './Reservation';
import Footer from './Footer';
import About from './About';
import Count from './Count';
import First from './First';

function Home() {
  return (
    <div>
      <Navbar />
      <First/>
      <About/>
      <Count/>
      {/* <Item /> */}
      <Reservation />
      <Footer />
    </div>
  );
}

export default Home;
