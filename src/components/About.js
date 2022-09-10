import React from 'react'
import Port from '../Assets/port.gif';

const About = (props) => {
  return (
    <div name ='About' className= {!props.nav ? 'flex flex-col w-full h-screen text-[#1e293b]' : 'hidden'}>
        <div className='flex justify-center mt-20'>
                <p className='text-5xl font-bold border-b-4 border-pink-600 w-[150px]'>
                    About
                </p>
            </div>
        <div className='flex justify-center items-center mt-12'>
            <img src={Port} alt="gif" className='object-scale-down h-60 w-120 rounded-xl shadow-2xl' />
        </div>
        <div className = 'flex flex-col justify-start items-center w-full h-full mt-20'>
            
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-8'>
                <div className = 'sm:text-right text-3xl  text-gray-600'>
                    <p>Hi, I'm Nikhil, nice to meet you. Please have a look around my portfolio.</p>
                </div>
                <div className = 'sm:text-left text-3xl text-gray-600'>
                    <p> I am passionate and motivated about learning new technologies around me. 
                    I have great experience in web development. 
                    Have a look at my projects section. 
                    </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About