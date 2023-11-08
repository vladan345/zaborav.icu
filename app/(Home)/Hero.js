"use client";

import Button from "@/components/Button";
import Image from "next/image";
import HeroIcon from "@/components/HeroIcon";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext.js";

export default function Hero() {
  const isDark = useContext(ThemeContext);

  return (
    <section className="h-screen max-w-[1360px] w-full mx-auto flex">
      <div className="w-2/3 h-full flex flex-col gap-5 justify-center">
        <h1>Zaborav.icu</h1>
        <p className="subheading max-w-[460px]">
          A blog website full of integration tutorials so I don't forget.
        </p>
        <Button text="Click.me" url="" />
      </div>
      <div className="w-1/3 flex items-center">
        <div className="w-[450px] h-[450px] relative">
          <div className="border-2 border-b-color rounded-[20px] w-full h-full bg-secondary absolute top-[15px] left-[-15px] hover:top-[0] hover:left-[0] transition-all duration-300 ease-in-out">
            <HeroIcon
              className="absolute top-[-30px] left-[30%]"
              icon="ex"
              isDark={isDark}
            />
            <HeroIcon
              className="absolute top-[94px] left-[-5%]"
              icon="pacman"
              isDark={isDark}
            />
            <HeroIcon
              className="absolute top-[109px] left-[46%]"
              icon="plus"
              isDark={isDark}
            />
            <HeroIcon
              className="absolute top-[38px] right-[-5%]"
              icon="progress"
              isDark={isDark}
            />
            <HeroIcon
              className="absolute top-[45%] right-[10%]"
              icon="circle"
              isDark={isDark}
            />
            <HeroIcon
              className="absolute bottom-[80px] left-[33%]"
              icon="star"
              isDark={isDark}
            />
            <HeroIcon
              className="absolute bottom-[34px] left-[-8%]"
              icon="square"
              isDark={isDark}
            />
            <HeroIcon
              className="absolute bottom-[80px] right-[15%]"
              icon="star2"
              isDark={isDark}
            />
            <HeroIcon
              className="absolute bottom-[-40px] right-[30%]"
              icon="donut"
              isDark={isDark}
            />
          </div>
          <div className="border-2 border-b-color rounded-[20px] w-full h-full bg-green "></div>
        </div>
      </div>
    </section>
  );
}
