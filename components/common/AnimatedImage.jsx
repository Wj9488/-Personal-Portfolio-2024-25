"use client"

import { motion as a } from 'framer-motion';
import Image from "next/image"

export default function AnimatedImage({ src, height, width, className }) {
    const variants = {
        initial: { opacity: 0},
        animate: { opacity: 1},
    };

    return (
        <a.div 
            className=""
            initial="initial" 
            animate="animate" 
            variants={variants} 
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
        >
            <Image 
                src={src}
                alt="image"
                placeholder='blur'
                width={width}
                height={height}
                className={`${className} opacity-90`} 
            />
        </a.div>
    );
}