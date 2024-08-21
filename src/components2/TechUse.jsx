import React from "react";
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

const OurServicesHome = () => {
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
    // Removed nextArrow and prevArrow properties
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
    <div className="min-h-screen flex flex-col items-center justify-center py-20">
      <div className="container mx-auto px-4">
        {/* Our Services Section */}
        {/* ... */}

        {/* CTA - Speak to Us */}
        {/* ... */}

        {/* Technologies We Use Slider */}
        <div className="text-center pt-28 m-16">
          <h2 className="font-bold text-4xl text-dark m-16">Technologies We Use</h2>
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
        {/* ... */}
      </div>
    </div>
  );
};

export default OurServicesHome;
