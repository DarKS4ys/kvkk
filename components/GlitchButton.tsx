'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { BsArrowRight } from 'react-icons/bs';

const TARGET_TEXT = 'GÖZ AT ;)';
const TARGET_TEXT_AGAIN = 'GÖZ AT';
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 28;

const CHARS = '!21@#$%^&*():{};|,.<>2/?';

const GlitchButton = ({
  glitch,
  scanLines,
  label,
  className,
}: {
  glitch?: boolean;
  scanLines?: boolean;
  label?: string;
  className?: string;
}) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const intervalRef2 = useRef<ReturnType<typeof setInterval> | null>(null);
  const [textHover, setTextHover] = useState(false);
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    setTextHover(true);
    clearInterval(intervalRef2.current || undefined);

    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split('')
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          return CHARS[randomCharIndex];
        })
        .join('');

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const scrambleAgain = () => {
    setTextHover(true);
    clearInterval(intervalRef.current || undefined);
    let pos = 0;

    intervalRef2.current = setInterval(() => {
      const scrambled_again = TARGET_TEXT_AGAIN.split('')
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          return CHARS[randomCharIndex];
        })
        .join('');

      setText(scrambled_again);
      pos++;
      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        clearInterval(intervalRef2.current || undefined);
        setText(TARGET_TEXT_AGAIN);
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
  };

  const handleMouseLeave = () => {
    setTextHover(false);
    scrambleAgain();
  };

  return (
    <motion.button
      whileTap={{
        scale: 0.955,
      }}
      onMouseEnter={scramble}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        'group relative overflow-hidden bg-white/10 backdrop-blur disabled:opacity-50 duration-300 active:scale-95 hover:text-black transition-all border-b px-7 py-4 my-5 text-white text-lg md:text-xl flex items-center gap-2 work-sans w-[100%] max-w-[25rem] md:w-[25rem] justify-center',
        className
      )}
    >
      <div className="w-full h-full absolute inset-0 group-hover:translate-y-0 translate-y-24 duration-300 transition bg-white" />
      <div className="relative z-10 flex items-center gap-2">
        <span>
          {glitch ? (
            textHover ? (
              text
            ) : (
              TARGET_TEXT_AGAIN
            )
          ) : label ? (
            label
          ) : (
            TARGET_TEXT_AGAIN
          )}
        </span>
        <BsArrowRight className='group-hover:rotate-45 group-active:rotate-90 transition-transform duration-300'/>
      </div>
      {scanLines && (
        <motion.span
          initial={{
            y: '100%',
          }}
          animate={{
            y: '-100%',
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 1,
            ease: 'linear',
          }}
          className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-transparent from-50% via-white group-hover:via-black/50 to-transparent to-60% opacity-0 transition-opacity group-hover:opacity-100"
        />
      )}
    </motion.button>
  );
};

export default GlitchButton;
