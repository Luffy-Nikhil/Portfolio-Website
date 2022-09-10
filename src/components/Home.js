import React from 'react';

import Nik from '../Assets/nik.jpg';
import { Link } from 'react-router-dom';
import { MdWavingHand } from "react-icons/md";

const Home = (props) => {

  return (
    <div >
      <div name='home' className={!props.nav ? 'w-full h-screen flex flex-col md:flex-row mx-auto' : 'hidden'}>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-center h-full'>
          <div className='rounded-xl bg-[#f8fafc] shadow-2xl h-100 px-8 py-9'>
            <div className='flex flex-col'>
              
              <div className='flex flex-row'>
                <p className='text-pink-600 text-2xl lg:text-3xl py-3 pr-4'>Hi,</p>
                <div className='flex items-center'>
                <MdWavingHand color="#FFCB4C" size = "35px"/>
                </div>  
              </div>
              <p className='text-pink-600 text-2xl lg:text-3xl py-3'>My name is</p>
            </div>
            <h1 className='text-[#1e293b] text-2xl lg:text-4xl font-bold'>Nikhil Kumar Pradhan</h1>
            <h2 className='text-[#1e293b] text-2xl lg:text-4xl font-bold'>I'm a full stack developer.</h2>
            <p className='text-[#1e293b] py-4 max-w-[720px] text-l lg:text-xl font-normal'>I'm a student doing my Btech in Computer Science and Engineering from Amity University Noida. I love to build responsive web applications with MERN tech stack.</p>
            <div>
              <button className='border-2 border-[#1e293b] px-6 py-3 flex items-center hover:bg-[#1e293b] hover:border-[#1e293b] hover:text-white'>
                <Link to="projects" smooth={true} offset={50} duration={500} >
                  View Projects
                </Link>
              </button>
            </div>
          </div>

        </div>
        <div className='flex justify-left items-center mx-auto '>

          <img src={Nik} alt="img" className='h-[350px] w-[350px] rounded-full shadow-2xl' />
        </div>

      </div>
    </div>



  )
}

export default Home;

// #e2e8f0