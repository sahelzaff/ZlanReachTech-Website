import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CodeIgniter from '../assets/CodeIgniter.webp';
import Angular from '../assets/Angular.webp';
import Css from '../assets/Css.webp';
import html from '../assets/html.webp';
import JavaScript from '../assets/JavaScript.webp';
import Laravel from '../assets/Laravel.webp';
import MernStack from '../assets/MernStack.webp';
import Nodejs from '../assets/Node.js.webp';
import php from '../assets/php.webp';
import react from '../assets/react.webp';
import imgs from '../assets/SC_1.webp'; 
import imgs2 from '../assets/SC_2.webp'; 
import imgs3 from '../assets/SC_3.webp'; 
import imgs4 from '../assets/SC_4.webp'; 
import imgs5 from '../assets/SC_5.webp'; 
import imgs6 from '../assets/SC_6.webp'; 
import imgs7 from '../assets/SC_7.webp'; 
import imgs8 from '../assets/SC_8.webp'; 
import imgs9 from '../assets/SC_9.webp'; 
import imgs10 from '../assets/SC_10.webp'; 
import imgs11 from '../assets/SC_11.webp'; 
import imgs12 from '../assets/SC_12.webp'; 
import img from '../assets/741852.png';

const OurServicesHome = () => {

         //countdown no
    const { ref, inView } = useInView({
        triggerOnce: true,  // Ensures it triggers only once when the element comes into view
        threshold: 0.3, // Percentage of element visibility required to trigger
      });
    
      const metrics = [
        { value: 92, label: 'Years of Industry Experience' },
        { value: 50, label: 'Satisfied Clients' },
        { value: 10, label: 'Global Clients' },
        { value: 878, label: 'Hours of work experience' },
      ];

    
  const services = [
    // Your existing services
  ];

  const techLogos = [
    CodeIgniter, 
    Angular, 
    Css, 
    html,
    JavaScript,
    Laravel,
    MernStack,
    Nodejs,
    php,
    react,
    // Add more logos here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10">
      <div className="container mx-auto px-4">
        {/* Our Services Section */}
        <div className="flex flex-wrap justify-center -mx-4 mb-16">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="p-10 bg-white rounded-[20px] shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-[200px] mb-8">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="font-semibold text-xl text-dark mb-3">
                  {service.title}
                </h4>
                <p className="text-body-color">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - Speak to Us */}
        <div className="text-center mx-44 mb-16">
          <h3 className="font-bold text-4xl text-dark mb-8">We Connect Your Business With<span className="text-[#009d00]"> Potential Buyers!</span> </h3>
          
          <div className="grid grid-cols-5 gap-1">
            <img src={imgs} alt="" className=" h-16   mx-auto" />
            <img src={imgs2} alt="" className="h-16  mx-auto" />
            <img src={imgs3} alt="" className="h-16  mx-auto" />
            <img src={imgs4} alt="" className="h-16  mx-auto" />
            <img src={imgs5} alt="" className="h-16  mx-auto" />
         {/*   <img src={imgs6} alt="" className="h-16 mx-auto" />*/}
          </div>
          
          <div className="grid grid-cols-5 gap-1 mt-4">
            <img src={imgs7} alt="" className=" h-16   mx-auto" />
            <img src={imgs8} alt="" className=" h-16   mx-auto" />
            <img src={imgs9} alt="" className=" h-16   mx-auto" />
            <img src={imgs10} alt="" className="h-16  mx-auto" />
            <img src={imgs11} alt="" className="h-16  mx-auto" />
   { /* <img src={imgs12} alt="" className="h-16 mx-auto" /> */ }
          </div>
        </div>

        {/* Sliding Text Animation Section */}
       

        {/* Technologies We Use Slider */}
        <div className="text-center pt-28 mb-16">
          <h2 className="font-bold text-4xl text-dark m-4">Technologies We <span className="text-[#009d00]">Use</span></h2>
          <Slider {...settings}>
            {techLogos.map((logo, index) => (
              <div key={index} className="p-3">
                <img
                  src={logo}
                  alt={`Technology ${index + 1}`}
                  className="h-22 mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Final Message */}
        <div className="min-h-screen flex items-center justify-center -mx-4  py-20">
      <div className="container bg-[#009d00] shadow-lg">

        {/* Wider Gray Box Wrapper */}
      

      <div className="container mx-auto ">
        <div className="flex flex-wrap items-center justify-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src={img} alt="Build Business" className="w-full h-auto object-cover" />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center text-white md:text-left">
            <h2 className="text-4xl font-bold mb-4 " style={{ fontFamily: 'Outfit, sans-serif' }}>
              Do you want to build & grow your business from offline to online ?
            </h2>
            <p className="text-2xl  pt-7" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <p>We build and sustain relationships grounded in </p>
              <p>consistency, transparency, trust, and integrity</p> 
              with our clients and business partners.
            </p>
        </div>
      </div>
      
        </div>
      </div>
    </div>

        {/* countdown no */}


        <div ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          <span className="text-[#009d00]">Result</span> Driven Performance Marketing
        </h2>
        <div className="flex flex-wrap justify-center text-center">
          {metrics.map((metric, index) => (
            <div key={index} className="w-full md:w-1/4 p-4">
              <h3 className="text-5xl font-bold text-black mb-2">
                {inView && (
                  <CountUp end={metric.value} duration={2} />
                )}
                +
              </h3>
              <p className="text-lg text-gray-700">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>







      </div>
    </div>
  );
};

export default OurServicesHome;
