"use client";

import { useState, useEffect } from 'react';
import { motion as a, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const buttonVariants = {
  initial: {
    opacity: 0,
    y: 5,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, delay: 0.8 },
  }
};

const menuVariants = {
  closed: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.5, ease: [0.85, 0, 0.15, 1] }
  },
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.85, 0, 0.15, 1] }
  }
};

const menuItems = [
  { name: 'Home', path: '/home' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const AlternativeMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsVisible(true); // Always visible on mobile
      }
    };

    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        if (window.innerWidth > 768) {
          setIsMenuOpen(false); // Automatically close menu when not visible on desktop
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', handleResize);
    handleResize(); // Call on mount to set initial state based on window size

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <a.div
            className="hover:cursor-pointer fixed top-2 xl:top-10 right-2 rounded-full p-5 global__bg ic shadow-2xl z-50"
            initial="initial"
            animate="visible"
            exit="initial"
            variants={buttonVariants}
            onClick={toggleMenu}
          >
            <p className="text-base font-medium">{isMenuOpen ? 'Close' : 'Menu'}</p>
          </a.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMenuOpen && (
          <a.div
            className="fixed top-0 flex flex-col justify-center right-0 bottom__left_radius xl:rounded-none h-1/2 xl:h-full transition__bg shadow-2xl z-40"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <a.ul className="w-[50vw] xl:w-[20vw] p-5">
              {menuItems.map((item, index) => (
                <a.li
                  key={item.name}
                  className="mt-[.75rem] text-4xl pc"
                  variants={{
                    initial: { opacity: 0, y: 10 },
                    enter: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
                  }}
                  initial="initial"
                  animate="enter"
                >
                  <Link href={item.path} className="transition-all duration-200 ease-in-out hover:opacity-50">
                    {item.name}
                  </Link>
                </a.li>
              ))}
            </a.ul>
          </a.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AlternativeMenu;
