import React from 'react'

const Projects = (props) => {
    return (
        <div name = 'projects' className= {!props.nav ? 'w-full h-screen flex flex-col justify-center p-6' :'hidden'}>

            <div className='max-w-[1000px] mx-auto'>
                <div className='pl-8'>
                    <p className='text-5xl font-bold text-[#1e293b] border-b-4 inline border-pink-600'>Projects</p>
                    <p className='pt-6 pb-6'>#Here are my few projects.</p>
                </div>
                <div className= 'grid sm:grid-cols-2 p-4 gap-10 text-[#1e293b]  bg-cover'>
                    <div className="bg-[url('/public/images/pastel-blue-vignette-concrete-textured-background.jpg')] bg-cover border-[#8995a5] border-2 rounded-xl shadow-2xl p-5" >
                        <p className='pl-4 pb-4 text-3xl font-bold'>Star Resume</p>
                        <ul className = 'text-xl'>
                            <li>
                                This is a website for creating beautiful resumes for your interview.
                            </li>
                            <li>
                                Tech stack used in the project (React, HTML, JS, CSS)
                            </li>
                        </ul>
                        <button className='mt-5 ml-4 border-2 border-[#8995a5] px-6 py-2 text-[18px] hover:bg-[#1e293b] hover:border-[#1e293b] hover:text-white'>
                        <a href="https://taupe-alpaca-3d6e99.netlify.app/">Demo</a>
                        </button>
                        <button className='mt-5 ml-16 border-2 border-[#8995a5] px-6 py-2 text-[18px] hover:bg-[#1e293b] hover:border-[#1e293b] hover:text-white'>
                        <a href="https://github.com/Luffy-Nikhil/Star-Resume">Code</a>
                        </button>
                    </div>
                    <div className="bg-[url('/public/images/pastel-blue-vignette-concrete-textured-background.jpg')] bg-cover border-[#8995a5] border-2 rounded-xl shadow-2xl p-5" >
                        <p className='pl-4 pb-4 text-3xl font-bold'>Personal Portfolio</p>
                        <ul className = 'text-xl'>
                            <li>
                                This is a website describing my bio.
                            </li>
                            <li>
                                Tech stack used in the project (React, HTML, JS, CSS).
                            </li>
                        </ul>
                        <button className='mt-5 ml-4 border-2 border-[#8995a5] px-6 py-2 hover:bg-[#1e293b] hover:border-[#1e293b] hover:text-white'>
                            Demo
                        </button>
                        <button className='mt-5 ml-16 border-2 border-[#8995a5] px-6 py-2 hover:bg-[#1e293b] hover:border-[#1e293b] hover:text-white'>
                            Code
                        </button>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default Projects