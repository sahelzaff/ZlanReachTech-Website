import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [largeCursorStyles, setLargeCursorStyles] = useState({ x: 0, y: 0 });
  const [smallCursorStyles, setSmallCursorStyles] = useState({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateCursor = () => {
      setLargeCursorStyles((prevStyles) => {
        const lerp = (start, end, t) => start + (end - start) * t;
        return {
          x: lerp(prevStyles.x, cursorPosition.x, 0.1),
          y: lerp(prevStyles.y, cursorPosition.y, 0.1),
        };
      });

      setSmallCursorStyles((prevStyles) => {
        const lerp = (start, end, t) => start + (end - start) * t;
        return {
          x: lerp(prevStyles.x, cursorPosition.x, 0.07), // Slightly slower interpolation
          y: lerp(prevStyles.y, cursorPosition.y, 0.07),
        };
      });

      requestRef.current = requestAnimationFrame(updateCursor);
    };
    requestRef.current = requestAnimationFrame(updateCursor);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [cursorPosition]);

  return (
    <>
      <div
        className="fixed w-12 h-12 border border-gray-300 rounded-full pointer-events-none transition-transform duration-100"
        style={{
          left: `${largeCursorStyles.x}px`,
          top: `${largeCursorStyles.y}px`,
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(198, 198, 198, 0.5)',
          opacity: '0.5',
        }}
      />
      <div
        className="fixed w-2 h-2 bg-gray-300 rounded-full pointer-events-none transition-opacity duration-150"
        style={{
          left: `${smallCursorStyles.x}px`,
          top: `${smallCursorStyles.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: '1',
        }}
      />
      <style jsx>{`
        .content:hover ~ div:nth-of-type(1) {
          transform: translate(-50%, -50%) scale(1.5);
          background-color: rgba(198, 198, 198, 0.5);
          opacity: 0.5;
        }
        .content:hover ~ div:nth-of-type(2) {
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
