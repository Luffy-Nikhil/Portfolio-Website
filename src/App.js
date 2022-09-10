
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"
import Home from './components/Home.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Connect from './components/Connect.js';
import Projects from './components/Projects.js';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <BrowserRouter >
      <div className="App bg-[url('/public/images/pastel-blue-vignette-concrete-textured-background.jpg')] bg-cover">
        <nav className='flex flex-col justify-end'>
          <ul className='hidden md:flex justify-end mt-5 h-12 p-2.5 mr-5 gap-4 list-none text-lg font-Montserrat'>
            <li className='rounded-md bg-[#f1f5f9] drop-shadow-lg' >
              <Link to="/">
                Home
              </Link>
            </li>
            <li className='rounded-md bg-[#f1f5f9] drop-shadow-lg '>
              <Link to="/about">
                About
              </Link>
            </li>
            <li className='rounded-md bg-[#f1f5f9] drop-shadow-lg'>
              <Link to="/skills">
                Skills
              </Link>
            </li>
            <li className='rounded-md bg-[#f1f5f9] drop-shadow-lg'>
              <Link to="/projects">
                Projects
              </Link>
            </li>
            <li className='rounded-md bg-[#f1f5f9] drop-shadow-lg'>
              <Link to="/connect">
                Connect
              </Link>
            </li>
          </ul>
          <div className='flex justify-end'>
            <button onClick={handleClick} className='md:hidden  mt-5 pb-5 mr-5'>
              {!nav ? <FaBars size='25px' /> : <FaTimes size='25px' />}
            </button>
          </div>

          <ul className={!nav ? 'hidden' : 'md:hidden font-Montserrat w-full h-screen flex flex-col justify-center items-center bg-cover text-4xl gap-8 text-black'}>
            <li>
              <Link onClick={handleClick} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/skills">
                Skills
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/connect">
                Connect
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home nav={nav} />} />
          <Route exact path="/about" element={<About nav={nav} />} />
          <Route exact path="/skills" element={<Skills nav={nav} />} />
          <Route exact path="/projects" element={<Projects nav={nav} />} />
          <Route exact path="/connect" element={<Connect nav={nav} />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
