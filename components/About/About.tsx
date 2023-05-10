import Image from 'next/image';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

const About = () => {
  const hoverClass =
    'cursor-pointer relative after:absolute after:-bottom-2 after:right-0 after:w-full after:h-1 after:bg-black after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 hover:after:scale-x-100';
  return (
    <AnimatePresence>
      <div className='relative flex justify-center items-center h-[800px]'>
        <motion.div
          className='w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full radial-gradient flex justify-center items-center border-2 border-b-black md:border-b-transparent md:border-r-black'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <div className='w-[200px] h-[200px] md:w-[400px] md:h-[400px] relative flex justify-center items-center'>
            <Image src='/images/avatar/temp.jpg' alt='Ksitiz Devkota' unoptimized width={100} height={100} className='w-[99%] h-[99%] object-cover rounded-full' />
            <div className='absolute top-0 right-0 w-full h-full rounded-full overlay-gradient flex justify-center items-center' />
          </div>
        </motion.div>
        <div className='absolute bottom-16 md:bottom-auto md:right-8 flex flex-col gap-y-8 items-center md:items-start'>
          <motion.h2 className={`${hoverClass}`} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} transition={{ duration: 0.5, delay: 0.5 }}>
            Insight A Podcast
          </motion.h2>
          <motion.h2 className={`${hoverClass}`} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} transition={{ duration: 0.5, delay: 0.75 }}>
            The Wisdom Point
          </motion.h2>
          <motion.h2 className={`${hoverClass}`} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} transition={{ duration: 0.5, delay: 1 }}>
            Devkota Mahat Herbs Suppliers
          </motion.h2>
        </div>

        <div className='absolute top-16 md:top-auto md:left-8 flex flex-col items-center md:items-start gap-y-4'>
          <div className='flex flex-col items-center md:items-start'>
            <motion.h1 className='text-[36px] uppercase' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} transition={{ duration: 0.5 }}>
              Ksitiz Devkota
            </motion.h1>
            <motion.h2 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} transition={{ duration: 0.5, delay: 0.75 }}>
              Initiator for startups
            </motion.h2>
          </div>
          <motion.div className='flex gap-x-2 items-center' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} transition={{ duration: 0.5, delay: 1 }}>
            <div className='w-2 h-4 bg-black' />
            <p>He gets it done</p>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default About;
