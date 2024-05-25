"use client"

import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalDocScrollLength = docHeight - winHeight;
      const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 101);

      setScrollProgress(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed mt-4 left-[40%] w-full z-50">
        <p className='pc pt-'>{scrollProgress}%</p>
    </div>
  );
};

export default ScrollProgress;
