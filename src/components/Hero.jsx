import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen flex flex-col justify-between items-center`}>
      <div className={`text-center max-w-6xl mx-auto pt-20`}>
        <h1 className={`${styles.heroHeadText} text-white font-bold text-xl mb-4`}>
          A Web <span className="text-purple-500">Design</span> &amp; <span className="text-purple-500">Development</span> Company
        </h1>
        <p className={`${styles.heroSubText} text-white font-bold text-lg`}>
          for Your Specific Requirements.
        </p>
      </div>

      <ComputersCanvas className="w-full h-full" />

      <div className='w-full flex justify-center items-center pb-16'>
        <a href='#about'>
          <div className='w-10 h-10 rounded-full border-4 border-secondary flex justify-center items-center'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
