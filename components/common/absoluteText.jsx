import { motion as a } from "framer-motion"

const AbsoluteText = () => {

  const pOne = {
    initial: {opacity: 0, y: 5, rotate: -2},
    animate: {
      opacity: 1, 
      y: 0,
      rotate: -0,
      transition: {
        duration: 1, 
        ease: "easeInOut",
        delay: 0.5, 
      }
    }
  }

  const pTwo = {
    initial: {opacity: 0, y: 5, rotate: -2},
    animate: {
      opacity: 1, 
      y: 0,
      rotate: -0,
      transition: {
        duration: 1, 
        ease: "easeInOut",
        delay: .75, 
      }
    }
  }

  return (
    <div className=''>
        <a.p className='pc absolute bottom-5 left-[2.5%] font-normal'
        initial="initial"
        animate="animate"
        variants={pOne}
        >©2023/2024</a.p>
        <a.p className='pc absolute bottom-5 ml-[40%] font-normal'
        initial="initial"
        animate="animate"
        variants={pTwo}
        >Scroll Down</a.p>
    </div>
  )
}

export default AbsoluteText