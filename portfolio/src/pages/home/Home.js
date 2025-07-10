import { motion } from 'framer-motion';
import About from '../about/About';
import Work from '../work/Work';
import Education from '../education/Education';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <About/>
      <Work/>
      <Education/>
    </motion.div>
  );
}

export default Home;
