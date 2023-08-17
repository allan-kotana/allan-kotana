import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react'
import { styles } from '../styles';
import { ComputersCanvas } from "./canvas";



const Hero = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show the text after a delay
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 2000); // Adjust the delay as needed

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <section className='relative w-full h-screen mx-auto'>
   <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
    <div className='flex flex-col justify-center items-center mt-5'>
      <div className='w-5 h-5 rounded-full bg-[#915eff]' />
      <div className='w-1 sm:h-80 h-40 violet-gradient'/>
    </div>
    <AnimatePresence>
          {showText && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ delay: 1, duration: 1.5 }}
              key="text"
            >
              <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Allan</span></h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop frontend, user<br className='sm:block hidden' /> interfaces and web applications
              </p>
            </motion.div>
          )}
        </AnimatePresence>
    
   </div>
   <ComputersCanvas />

   <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
    <a href="#about">
      <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
       <motion.dev animate={{
        y: [0, 24, 0]
       }}
       transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop'
       }} 
       className="w-3 h-3 rounded-full bg-secondary mb-1"/>
      </div>
    </a>
   </div>
    </section>
  );
};

export default Hero;
