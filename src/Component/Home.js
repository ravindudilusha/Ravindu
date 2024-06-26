import React from 'react';
import '../Styles/Home.css';
import Header from './Header';
import TextSlider from './Textslider';
import DP from '../Assests/DP.svg';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  return (
    <>
      <div id="home" className='body'>
        <Header className='z-10' /> 
        <div className='absolute'>
          <TextSlider />
          <div className='imagecontainer'>
            <img src={DP} className='dpimage' />
          </div>
          <div className='textcontainer'>
            <p className='UIUXtext'>UI/UX Engineer & Frontend Developer</p>
            <p className='UIUXtext'>Google Certified UI/UX Engineer</p>
          </div>
          <div className='absolute inset-0 justify-center'>
            <div className='bg-shape1 bg-teal opacity-50 bg-blur'></div>
            <div className='bg-shape2 bg-primary opacity-50 bg-blur'></div>
            <div className='bg-shape3 bg-purple opacity-50 bg-blur'></div>
            <div className='bg-shape4 bg-blue opacity-50 bg-blur'></div>
            <div className='bg-shape5 bg-yellow opacity-50 bg-blur'></div>
          </div>
        </div>
      </div>
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer/>
      
    </>
  );
}

export default Home;
