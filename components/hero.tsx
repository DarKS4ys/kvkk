'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from './aurora-background';
import SecureGlobeImage from '@/public/secure-globe.png';
import SecurePassImage from '@/public/secure-pass.png';
import Image from 'next/image';
import GlitchButton from './GlitchButton';
export default function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          type: 'tween',
          ease: 'easeInOut'
        }}
        className="flex md:flex-row flex-col gap-4 items-center justify-between px-4"
      >
        <div className="z-10 flex md:gap-4 flex-col md:text-start text-center text-white max-w-3xl">
          <div className="font-extralight text-base md:text-3xl">
            Trabzon Sosyal Bilimler Lisesi
          </div>
          <div className="text-3xl md:text-7xl font-bold">
            Kişisel Verileri Koruma Kulübü
          </div>
          <GlitchButton scanLines glitch/>
        </div>

        <div className="w-fit z-10 order-first md:order-last">
          <Image
            alt="Hero Image"
            src={SecurePassImage}
            placeholder="blur"
            className="w-48 md:w-64 2xl:w-72 object-cover"
            width={512}
            height={512}
          />
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
