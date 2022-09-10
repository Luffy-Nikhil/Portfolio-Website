import React from 'react'
import HTML from '../Assets/html.png'
import CSS from '../Assets/css.png'
import JS from '../Assets/javascript.png'
import Mongo from '../Assets/mongo.png'
import Node from '../Assets/node.png'
import Tailwind from '../Assets/tailwind.png'
import REACT from '../Assets/react.png'
import Github from '../Assets/github.png'

const Skills = (props) => {
  return (
    <div name = 'Skills' className = {!props.nav ? 'w-full h-screen text-[#1e293b] justify-center' : 'hidden'}>
        <div className='max-w-[1000px] mx-auto p-6  pt-40 flex flex-col justify-center'>
            <div>
                <p className = 'text-5xl  font-bold inline border-b-4 border-pink-600'>
                    Skills
                </p>
                <p className='py-4 text-xl'>
                    # These are the technologies I've worked so far.
                </p>
            </div>
            <div className='w-full grid grid-cols-2 gap-4 text-center py-8'>
                <div className = 'shadow-md py-3 shadow-[#1e293b] hover:scale-110 duration-500 bg-[#1e293b] text-zinc-50'>
                    <img src={HTML} alt="html icon" className='w-20 mx-auto'/>
                    <p>HTML</p>
                </div>
                <div className = 'shadow-md py-3 shadow-[#1e293b] hover:scale-110 duration-500 bg-[#1e293b] text-zinc-50'>
                    <img src={CSS} alt="css icon" className='w-20 mx-auto'/>
                    <p>CSS</p>
                </div>
                <div className = 'shadow-md py-3 shadow-[#1e293b] hover:scale-110 duration-500 bg-[#1e293b] text-zinc-50'>
                    <img src={JS} alt="javascript icon" className='w-20 mx-auto' />
                    <p>JAVASCRIPT</p>
                </div>
                <div className = 'shadow-md py-3 shadow-[#1e293b] hover:scale-110 duration-500 bg-[#1e293b] text-zinc-50'>
                    <img src={REACT} alt="react icon" className='w-20 mx-auto'/>
                    <p>REACT</p> 
                </div>
                <div className = 'shadow-md py-3 shadow-[#1e293b] hover:scale-110 duration-500 bg-[#1e293b] text-zinc-50'>
                    <img src={Tailwind} alt="tailwind icon" className='w-20 mx-auto'/>
                    <p>TAILWIND CSS</p>
                </div>
                <div className = 'shadow-md py-3 shadow-[#1e293b] hover:scale-110 duration-500 bg-[#1e293b] text-zinc-50'>
                    <img src={Mongo} alt="mongo icon" className='w-20 mx-auto'/>
                    <p>MONGO</p>
                </div>
                <div className = 'shadow-md py-3 shadow-[#1e293b] hover:scale-110 duration-500 bg-[#1e293b] text-zinc-50'>
                    <img src={Node} alt="node icon" className='w-20 mx-auto'/>
                    <p>NODE</p>
                </div>
                <div className = 'shadow-md py-3 shadow-[#1e293b] hover:scale-110 duration-500 bg-[#1e293b] text-zinc-50'>
                    <img src={Github} alt="github icon" className='w-20 mx-auto'/>
                    <p>GITHUB</p>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Skills