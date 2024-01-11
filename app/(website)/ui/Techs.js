"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTheme } from "@/context/ThemeContext";
import Button from "@/components/Button";

gsap.registerPlugin(ScrollTrigger);

export default function Techs({ techs }) {
  const { theme } = useTheme();
  const [globalTheme, setGlobalTheme] = useState();

  useEffect(() => {
    setGlobalTheme(theme);
  }, [theme]);
  // useEffect(() => {
  //   const ctx =

  //   return () => {
  //     second
  //   }
  // }, [])

  return (
    <section className="Latest">
      <div className="w-full flex justify-center py-[200px]">
        <div className="w-[2px] h-[300px] bg-b-color"></div>
      </div>
      <h2 className="text-center mb-[105px]">Explore by tech</h2>
      <div className="grid grid-cols-5 gap-[115px]">
        {techs.map((tech, index) =>
          index < 5 ? (
            <div className="flex flex-col gap-[50px]" key={index}>
              <div className="relative w-full h-full cursor-pointer min-h-[270px]">
                <div className="w-full h-full absolute top-[-15px] left-[15px] bg-green border-2 border-b-color rounded-[20px] p-[50px] pb-0 transition duration-500"></div>
                <div className="absolute h-full w-full top-[0px] left-[0px] hover:top-[-15px] hover:left-[15px] border-2 border-b-color rounded-[20px] bg-secondary transition-all duration-500 ease-in-out p-[20px] flex justify-center">
                  {globalTheme == "light" ? (
                    <Image
                      src={`/svgs/techs/${tech.id}-l.svg`}
                      alt={tech.title}
                      width={150}
                      height={150}
                    />
                  ) : (
                    <Image
                      src={`/svgs/techs/${tech.id}-d.svg`}
                      alt={tech.title}
                      width={150}
                      height={150}
                    />
                  )}
                </div>
              </div>
              <h3 className="text-center">{tech.title}</h3>
            </div>
          ) : null
        )}
      </div>
      <div className="flex items-center justify-center mt-[105px]">
        <Button text="See.all.techs" url="#"></Button>
      </div>
    </section>
  );
}
