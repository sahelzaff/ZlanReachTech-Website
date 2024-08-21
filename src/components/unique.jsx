import React from 'react';
import uniqueImage from '../assets/40.png'; // Replace with the correct path to your image

const UniqueSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-10">
      <div className="container mx-auto">
        {/* Content Section */}
        <div className="bg-[#009d00] rounded-lg shadow-lg">
          {/* Heading */}
          <h2 className="text-4xl text-white font-bold text-center pt-10" style={{ fontFamily: 'Outfit, sans-serif' }}>
            What makes me <span className="text-white">unique?</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center">
            {/* Image */}
            <div className="md:w-1/2 w-full px-12 mb-8 md:mb-0">
              <img
                src={uniqueImage}
                alt="An illustration representing uniqueness and personal branding"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Text Content */}
            <div className="md:w-1/2 w-full px-4 text-center md:text-left">
              <p className="text-2xl text-white leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                I go above and beyond to meet the needs of my clients, personally
                ensuring their satisfaction with the final results. Staying at the top
                of my game is a priority, which is why I am constantly researching new
                trends and developing innovative approaches to my marketing strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueSection;
