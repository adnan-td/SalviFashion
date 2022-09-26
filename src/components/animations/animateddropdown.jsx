import { motion } from "framer-motion";

const AnimatedNav = ({ children, className }) => {
  const animations = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  return (
    <motion.div variants={animations} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.2 }} className={className}>
      {children}
    </motion.div>
  );
};

export default AnimatedNav;
