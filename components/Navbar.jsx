'use client';

import { motion } from 'framer-motion' ;
import styles from '../styles' ;
import { navVariants } from '../utils/motion' ;

const Navbar = () => (
  <motion.nav
   variants={navVariants} 
   initial='hidden'
   whileInView='show'
   viewport={{once: true , amount: 0.3}}
   className={`${styles.xPaddings} py-8 relative`}
  >
    <div className='absolute w-[50%]  inset-0 gradient-01' />
    <div className={`${styles.innerWidth} mx-auto flex justify-between  gap-8`} >
      <img 
        src='/search.svg' 
        alt='search' 
        className='w-[24px] h-[24px] object-contain' 
        />
      <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
        #Your Pet My Pet
      </h2>
      <button type='button' className='flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]' >
          
          <span className='font-normal text-[16px] text-white'>LOGIN | SIGN UP</span>
        </button>
    </div>
  </motion.nav>
);

export default Navbar;
