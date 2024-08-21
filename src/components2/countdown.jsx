import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const PerformanceMetrics = () => {
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

  return (
    <div ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          <span className="text-green-600">Result</span> Driven Performance Marketing
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
  );
};

export default PerformanceMetrics;
