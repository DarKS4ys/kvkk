"use client"

import { toggleLanguage, useLanguage } from "@/lib/lang";
import { HiTranslate } from "react-icons/hi";

export default function LangButton() {
  const lang = useLanguage()

  return (
    <div className="absolute m-10 top-4 right-4 z-20">
      <button onClick={() => toggleLanguage()} className="bg-white/10 cursor-pointer backdrop-blur px-4 py-2 flex gap-2 items-center duration-300 transition-all md:hover:bg-white md:hover:text-black">
        <HiTranslate />
        <h1>{lang === "en" ? "English" : "Turkish"}</h1>
      </button>
    </div>
  )
}