"use client"

import { useTheme } from 'next-themes'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

export default function ThemeSwitch() {
    const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme == 'light' ? "dark" : 'light')} className='fixed bottom-16 right-6 bg-white w-12 h-12 xl:w-18 xl:h-18 xl:text-lg bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-opacity-10'>
        {
            theme === "light" ? (
                <BsSun/>
            ) : (
                <BsMoon/>
            )
        }

    </button>
  )
}
