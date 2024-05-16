"use client"

import Link from "next/link";
import Image from "next/image";
import { motion as a } from "framer-motion";
import { useState } from "react";

const Project = ({
  projectTitle,
  imageSrc,
  projectDate,
  projectLink,
  projectLabel,
}) => {
  const [mouseX, setMouseX] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMouseX(event.clientX - rect.left - 200); // Adjusting 200 to center the image on the cursor
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Link href={projectLink}>
      <div
        className="py-[1.25rem] grid grid-cols-3 items-center transition-all duration-400 ease-in-out hover:px-[20px]"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="text-lg lg:text-2xl ">{projectTitle}</p>
        <p className="text-lg lg:text-2xl flex justify-center">{projectDate}</p>
        <p className="text-lg lg:text-2xl flex justify-end">{projectLabel}</p>
        {isHovering && (
          <a.div
            style={{
              x: mouseX,
              position: 'absolute',
              pointerEvents: 'none', // This makes the div not block other mouse events
              zIndex: 10, // Ensure the image is above other elements
            }}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Image
              src={imageSrc}
              alt="Project Image"
              className="shadow-2xl rounded lg:block hidden"
              width={500}
              height={500}
              quality={80}
              loading="eager"
            />
          </a.div>
        )}
      </div>
    </Link>
  );
};

export default Project;