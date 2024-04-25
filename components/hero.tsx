'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from './aurora-background';
import SecureGlobeImage from '@/public/secure-globe.png'
import SecurePassImage from '@/public/secure-pass.png'
import Image from 'next/image';
export default function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="flex gap-4 h-full items-center justify-between  px-4"
      >
        <div className='z-10 flex gap-4 flex-col dark:text-white max-w-3xl'>
          <div className="text-3xl md:text-7xl font-bold">
            Kişisel Verileri Koruma Kulübü
          </div>
          <div className="font-extralight text-base md:text-4xl">
            TSBL
          </div>
        </div>

        <div className='w-fit z-10'>
          <Image alt='Hero Image' src={SecurePassImage} placeholder="blur" className="w-64 object-cover" width={512} height={512}/>
        </div>


      </motion.div>
    </AuroraBackground>
  );
}
