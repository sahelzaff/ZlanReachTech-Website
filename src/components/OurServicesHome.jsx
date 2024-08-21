import React from "react";
import img from '../assets/5464026.jpg'; 
import img2 from '../assets/10168.jpg'; 
import img3 from '../assets/3509388.jpg'; 
import img4 from '../assets/12345.jpg'; 
import img5 from '../assets/987654.jpg'; 
import img6 from '../assets/20943901.jpg'; 

const OurServicesHome = () => {
  const services = [
    {
      title: "E-Commerce Seller Account Management",
      description: "End to End Ecommerce seller account management with a focus on brand development & sustained growth.",
      img: img,
    },
    {
      title: "Product/Services Images and Video Creation",
      description: "Best photography/Video are the best tools to explain your product and services to crack your sale.",
      img: img5,
    },

    {
      title: "Google My Business Optimization",
      description: "Optimizing your profiles, photography, and finding new business opportunities to locate your business by your customers.",
      img: img4,
    },
    
    {
      title: "Social Media Handling",
      description: "Interact with your potential buyers and existing customers on social media with our most suitable strategies to create a mark in the customer's mind.",
      img: img3,
    },
    {
      title: "Website Development",
      description: "Customized / template designed websites for fast, reliable, secured performance, scalability, and user experience.",
      img: img2,
    },
    {
      title: "Lead Generation",
      description: "Leads generation services offer you an increased number of targeted and qualified leads.",
      img: img6,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto ">

        {/* Wider Gray Box Wrapper */}
        <div className="bg-[#009d00] shadow-lg">
          <div className="text-center mb-12 text-white lg:mb-20">
            <span className="font-bold text-4xl text-primary mb-6 pt-10 block" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Our Services
            </span>
            <h2 className="font-semibold text-3xl md:text-[40px] text-dark mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              What We Offer
            </h2>
            <p className="text-xl text-body-color max-w-[510px] mb-5 mt5 mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Personalized solutions and services to boost your online presence for your business.
            </p>
          </div>

          <div className="flex flex-wrap justify-center">
            {services.map((service, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-10 mb-10">
                <div className="p-10 bg-white rounded-[20px] shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 flex flex-col h-full">
                  <div className="w-full h-[300px] mb-8 overflow-hidden rounded-lg">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h4 className="font-semibold text-2xl text-dark mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {service.title}
                  </h4>
                  <p className="text-body-color text-base flex-grow" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End of Wider Gray Box Wrapper */}
      </div>
    </div>
  );
};

export default OurServicesHome;
