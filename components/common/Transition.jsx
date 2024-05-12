import { motion as a, AnimatePresence } from "framer-motion";

const Transition = ({ children, isLoading }) => {
  return (
    <AnimatePresence>
      <a.div
        className="z-[99] transition__bg flex items-center justify-center"
        initial={{ translateY: "0%" }}
        animate={{ translateY: "-100%" }}  // Delay the animation when loading
        exit={{ translateY: "-100%" }}
        transition={{
          duration: 0.75,
          delay: isLoading ? 2.1 : 0.1, // Delay the animation when isLoading
          ease: [0.85, 0, 0.15, 1],
        }}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 10,
          overflowY: "hidden",
        }}
      >
      </a.div>
      <a.div
        initial={{ opacity: 0, y: 12.5 }} // Keep initial hidden when loading
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{
          duration: 0.75,
          ease: "easeInOut",
          delay: isLoading ? 2.2 : 0.2,  // Adjust delay based on loading state
        }}
        className="overflow-hidden"
      >
        {children}
      </a.div>
    </AnimatePresence>
  );
};

export default Transition;
