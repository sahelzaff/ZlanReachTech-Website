import React, { useState } from 'react';
import img from '../assets/1-removebg-preview.png';

function App() {
  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center bg-[#0000]">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="text-start">
            <div className="relative">
              <img className="absolute top-0 right-0 h-96" src={img} alt="" />
            </div>
            {/* Sliding Text animation */}
            <p
              className="font-bold pb-10 text-4xl md:text-4xl bg-clip-text text-black"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Who We <span className="text-[#009d00]">Are?</span>
            </p>
            <div
              className="font-extrabold pb-40 text-3xl md:text-4xl bg-clip-text text-black"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              <span>We Help</span>{' '}
              <span
                className="text-[#009d00] inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden"
              >
                <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
                  <li>BRAND</li>
                  <li>MSME</li>
                  <li>MANUFACTURERS</li>
                  <li>SERVICE PROVIDER</li>
                </ul>
              </span>
              <h1
                className="text-4xl font-extrabold tracking-tight from-slate-200/60 to-50% to-slate-200"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                <p className="pr-28 mr-44 mt-3">Grow your Online</p>
              </h1>
              <div className="mt-16" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="text-xl">Offline presents and</span>{' '}
                <span
                  className="text-xl text-[#009d00] inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] overflow-hidden"
                >
                  <ul className="block animate-text-slide-5 text-center leading-tight [&_li]:block">
                    <li>Build</li>
                    <li>Boost</li>
                    <li>Improve</li>
                    <li>Upscale</li>
                  </ul>
                </span>
                <span className="text-xl text-left">your business.</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
