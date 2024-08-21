import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/Own Website/Logo_1.png';
import logo_Name from '../assets/Own Website/Logo_5.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Service' },
    { id: 3, text: 'About Us' },
    { id: 4, text: 'Blog' },
    { id: 5, text: 'Community' },
    { id: 6, text: 'Contact Us' },
  ];

  return (
    <div className='relative'>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className='absolute inset-0 w-full h-full object-cover z-[-1]'
      >
        <source src="/path/to/video.mp4" type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Navbar Content */}
      <div className='relative bg-opacity-50 bg-[#ffff] flex justify-between items-center h-20 max-w-[2000px] px-4 text-black text-xl'>
        <div className='flex items-center'>
          <img className='h-14 m-3' src={logo} alt='Logo' />
          <img className='h-14' src={logo_Name} alt='Logo Name' />
        </div>
        <ul className='hidden md:flex'>
          {navItems.map((item) => (
            <li
              key={item.id}
              className='nav-item relative font-semibold p-5 m-2 cursor-pointer duration-300 hover:text-[#009d00] after:absolute after:w-0 after:h-[2px] after:bottom-[25%] after:left-5 after:bg-[#009d00] after:transition-all after:duration-300 after:ease-in-out hover:after:w-[50%]'
            >
              {item.text}
            </li>
          ))}
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <ul
          className={
            nav
              ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
       
          {navItems.map((item) => (
            <li
              key={item.id}
              className='nav-item relative p-4 border-b text-2xl rounded-l hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
