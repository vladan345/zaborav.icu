"use client";

import Button from "@/components/Button";
import Image from "next/image";
import HeroIcon from "@/components/HeroIcon";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { heroFloating } from "@/animations/hero";
import { useTheme } from "@/context/ThemeContext";
gsap.registerPlugin();

export default function Hero() {
  const { theme } = useTheme();

  const main = useRef();

  useEffect(() => {
    console.log(theme);
    const ctx = gsap.context(() => {
      heroFloating();
    }, main.current);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={main}
      className="h-screen max-w-[1360px] w-full mx-auto flex relative"
    >
      <div className="w-2/3 h-full flex flex-col gap-5 justify-center">
        <h1>Zaborav.icu</h1>
        <p className="subheading max-w-[460px]">
          A blog website full of integration tutorials so I don't forget.
        </p>
        <Button text="Click.me" url="" />
      </div>
      <div className="w-1/3 flex items-center">
        <div className="w-[450px] h-[450px] relative">
          <div className="border-2 border-b-color rounded-[20px] w-full h-full bg-secondary absolute top-[15px] left-[-15px] hover:top-[0] hover:left-[0] transition-all duration-500 ease-in-out">
            <HeroIcon
              className="icon absolute top-[-30px] left-[30%]"
              icon="ex"
              theme={theme}
            />
            <HeroIcon
              className="icon absolute top-[94px] left-[-5%]"
              icon="pacman"
              theme={theme}
            />
            <HeroIcon
              className="icon absolute top-[109px] left-[46%]"
              icon="plus"
              theme={theme}
            />
            <HeroIcon
              className="icon absolute top-[38px] right-[-5%]"
              icon="progress"
              theme={theme}
            />
            <HeroIcon
              className="icon absolute top-[45%] right-[10%]"
              icon="circle"
              theme={theme}
            />
            <HeroIcon
              className="icon absolute bottom-[80px] left-[33%]"
              icon="star"
              theme={theme}
            />
            <HeroIcon
              className="icon absolute bottom-[34px] left-[-8%]"
              icon="square"
              theme={theme}
            />
            <HeroIcon
              className="icon absolute bottom-[80px] right-[15%]"
              icon="star2"
              theme={theme}
            />
            <HeroIcon
              className="icon absolute bottom-[-40px] right-[30%]"
              icon="donut"
              theme={theme}
            />
          </div>
          <div className="border-2 border-b-color rounded-[20px] w-full h-full bg-green "></div>
        </div>
      </div>
      <div className="absolute left-1/2 bottom-2 -translate-x-1/2">
        <span className="mb-1 block button">scroll</span>
        <div className="relative w-[75px] h-[82px] group">
          {theme == "dark" ? (
            <>
              <Image
                src="/svgs/hero/triangle-d-b.svg"
                alt="scroll icon"
                width={60}
                height={51}
                className="absolute right-[0] top-0"
              />
              <Image
                src="/svgs/hero/triangle-d-f.svg"
                alt="scroll icon"
                width={60}
                height={51}
                className="absolute right-[0] top-0 -translate-x-[12px] translate-y-[6px] group-hover:-translate-x-[0] group-hover:translate-y-[0] duration-300 ease-in-out"
              />
            </>
          ) : (
            <>
              <Image
                src="/svgs/hero/triangle-l-b.svg"
                alt="scroll icon"
                width={60}
                height={51}
                className="absolute right-[0] top-0"
              />
              <Image
                src="/svgs/hero/triangle-l-f.svg"
                alt="scroll icon"
                width={60}
                height={51}
                className="absolute right-[0] top-0 -translate-x-[12px] translate-y-[6px] group-hover:-translate-x-[0] group-hover:translate-y-[0] duration-300 ease-in-out"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
