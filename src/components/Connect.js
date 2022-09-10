import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaTwitterSquare, FaHandshake } from "react-icons/fa";


const Connect = (props) => {
  return (
    // <div name = 'contact' className = {!props.nav ? 'w-full h-screen bg-[#1e293b] text-white flex justify-center items-center' : 'hidden'}>
    //     <form method = 'post' action="https://getform.io/f/06448426-291b-436a-b3aa-d07b8987217a" className='flex flex-col  max-w-[600px] w-full text-[#1e293b]'>
    //         <div className = 'pb-8'>
    //             <p className='text-5xl font-bold inline border-b-4 border-pink-600 text-white'>Contact</p>
    //             <p className='py-4'> # Have any queries ? Post your queries in the below form.</p>
    //         </div>
    //         <div className='flex flex-col'>
    //             <input className='p-2 my-3' type="text" placeholder='Name' name = 'name'/>
    //             <input className='p-2' type="text" placeholder='Email' name = 'email'/>
    //             <textarea className = 'p-2 my-3 text-[#1e293b]'name="message" id="" cols="30" rows="10"></textarea>
    //             <button className='border-2 border-gray-300 py-2 my-8 mx-auto px-6 text-white hover:border-pink-600 hover:bg-pink-600'>Submit</button>
    //         </div>
    //     </form>
    // </div>
    <div name="connect" className={!props.nav ? 'bg-white flex flex-col gap-10 justify-center items-center h-screen' : 'hidden'}>
      <div className='flex flex-row gap-5'>
        <h2 className='text-3xl'>Let's Connect </h2>
        <FaHandshake color="#FFCB4C" size="50px" />
      </div>

      <div className='flex flex-row gap-10'>
        <a href='https://www.linkedin.com/in/nikhil-kumar-pradhan-418b25199/'><BsLinkedin color="#0077b5" size="50px" /></a>
        <a href='https://github.com/Luffy-Nikhil'><FaGithubSquare color="#171515" size="55px" /></a>
        <a href="mailto:nikhilpradhan636@gmail.com"><AiOutlineMail size="58px" /></a>
        <a href="https://twitter.com/NikhilP28925668"><FaTwitterSquare color="#1DA1F2" size="58px" /></a>
      </div>
    </div>
  )
}

export default Connect;