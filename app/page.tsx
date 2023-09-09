import React from 'react';
import About from '@/components/About';
import Comments from '@/components/Testimonials';
import MainLinks from '@/components/MainLinks';
import MainPage from '@/components/MainPage';
import Carousel from '@/components/Carousel ';
import Footer from '@/components/Footer';

// Import the Carousel component

const Home = () => {
  return (
    <main className='flex flex-col items-center bg-white'>
      <MainPage />
      <About />
      <MainLinks />
      <Comments />
      <Carousel />
   <Footer/>
      
   
    </main>
  );
};

export default Home;
