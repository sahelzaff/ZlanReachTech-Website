import React from "react";
import logo from '../assets/Own Website/Logo_1.png';
import imgLinkedin from '../assets/linkedin.png';
import imgFacebook from '../assets/facebook.png';
import imgInstagram from '../assets/instagram.png';
import imgWhatsapp from '../assets/whatsapp.png';
import imgTwitter from '../assets/twitter.png';
import imgAddress from '../assets/house.png';
import imgPhone from '../assets/telephone.png';
import imgEmail from '../assets/social.png';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-neutral-300 text-center lg:text-left">
      <div className="px-6 py-6 pb-0 text-center md:text-left">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3">
          {/* Company section */}
          <div className="mb-6 flex flex-col items-center md:items-start">
            <h6 className="mb-4 flex items-center justify-center font-bold uppercase text-[#00ff00] md:justify-start text-xl">
              <img className="h-14 w-14 mr-3" src={logo} alt="ZLAN Reach Solution Logo" />
              <span className="text-3xl">ZLAN REACH SOLUTION</span>
            </h6>
            <p className="text-2xl">
              Mr. Medina Jalal<br />
              Marketing and Website Design Manager
            </p>
          </div>

          {/* Useful links section centered */}
          <div className="mb-6 text- flex flex-col items-center justify-center">
            <h6 className="mb-2 font-semibold uppercase text-neutral-100">Useful links</h6>
            <p className="mb-2 mr-12 ">
              <a href="/services" className="text-neutral-400 hover:text-white">Service</a>
            </p>
            <p className="mb-2 mr-9 ">
              <a href="/about" className="text-neutral-400 hover:text-white">About Us</a>
            </p>
            <p className="mb-2 mr-20 ml-2 ">
              <a href="/blog" className="text-neutral-400 hover:text-white">Blog</a>
            </p>
            <p className="mb-2 mr-7 ">         
                   <a href="/community" className="text-neutral-400  hover:text-white">Community</a>
            </p>
            <p className="mb-2 mr-8 ">              
              <a href="/ContactUs" className="text-neutral-400 hover:text-white">Contact Us</a>
            </p>
          </div>

          {/* Contact section */}
          <div className="mb-4 text-lg">
            <h6 className="mb-4 ml-9 font-medium uppercase text-neutral-100">Contact</h6>
            <p className="mb-4 flex text-base items-center text-white justify-center md:justify-start">
              <img src={imgAddress} alt="Address" className="mr-3 h-6 w-6" />
              <a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer">
                8th Cross Road, Patel House, Sultanpalya, <br />
                North Bangalore, Karnataka, India - 560032
              </a>
            </p>
            <p className="mb-4 flex text-base items-center justify-center md:justify-start">
              <img src={imgEmail} alt="Email" className="mr-3 h-6 w-6" />
              <a href="mailto:zlanreachsolution@gmail.com" className="text-white hover:text-neutral-400">
                zlanreachsolution@gmail.com
              </a>
            </p>
            <p className="mb-4 flex text-base items-center justify-center md:justify-start">
              <img src={imgPhone} alt="Phone" className="mr-3 h-6 w-6" />
              <a href="tel:+918904185971" className="text-white hover:text-neutral-400">
                +91 8904185971
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Social media links */}
      <div className="flex items-center justify-center border-b-2 border-neutral-600 p-6 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mr-6 text-neutral-400 hover:text-white">
            <img src={imgFacebook} alt="Facebook" className="h-6 w-6" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mr-6 text-neutral-400 hover:text-white">
            <img src={imgTwitter} alt="Twitter" className="h-6 w-6" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="mr-6 text-neutral-400 hover:text-white">
            <img src={imgWhatsapp} alt="WhatsApp" className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mr-6 text-neutral-400 hover:text-white">
            <img src={imgInstagram} alt="Instagram" className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white">
            <img src={imgLinkedin} alt="LinkedIn" className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-neutral-200 p-2 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright: </span>
        <a href="/" className="font-semibold text-neutral-600 dark:text-neutral-400">
          ZLAN REACH SOLUTION
        </a>
      </div>
    </footer>
  );
}
