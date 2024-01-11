"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTheme } from "@/context/ThemeContext";
import Button from "@/components/Button";

gsap.registerPlugin(ScrollTrigger);

export default function Latest({ posts }) {
  const { theme } = useTheme();
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
      <h2 className="text-center mb-[105px]">Latest posts</h2>
      <div className="grid grid-cols-3 gap-[115px]">
        {posts.map((post, index) =>
          index < 3 ? (
            <div
              key={index}
              className="relative w-full h-full min-h-[380px] cursor-pointer"
            >
              <div className="w-full h-full absolute top-[-15px] left-[15px] bg-green border-2 border-b-color rounded-[20px] p-[50px] pb-0 transition duration-500"></div>
              <div className="absolute h-full w-full top-[0px] left-[0px] hover:top-[-15px] hover:left-[15px] border-2 border-b-color rounded-[20px] bg-secondary transition-all duration-500 ease-in-out p-[50px] pb-[0] flex">
                <h3 className="w-4/5">{post.title}</h3>
                <div className="w-1/5 h-4/5 flex flex-col items-center self-end">
                  {theme == "light" ? (
                    <Image
                      src={`/svgs/techs/${post.category[0]}-l.svg`}
                      alt={post.category[1]}
                      width={60}
                      height={60}
                    />
                  ) : (
                    <Image
                      src={`/svgs/techs/${post.category[0]}-d.svg`}
                      alt={post.category[1]}
                      width={60}
                      height={60}
                    />
                  )}
                  <div className="h-[calc(100%-60px)] w-[2px] bg-b-color"></div>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
      <div className="flex items-center justify-center mt-[60px]">
        <Button text="See.all.posts" url="#"></Button>
      </div>
    </section>
  );
}
