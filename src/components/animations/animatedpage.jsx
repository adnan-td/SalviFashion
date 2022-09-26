import { motion } from "framer-motion";

const AnimatedPage = ({ children }) => {
  const animations = {
    initial: { opacity: 0, y: 0, scale: 1 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 0, scale: 1 },
  };

  return (
    <motion.div variants={animations} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
