"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Latest() {
  // useEffect(() => {
  //   const ctx =

  //   return () => {
  //     second
  //   }
  // }, [])

  return (
    <section className="Latest">
      <div className="w-full bg-slate-200 flex justify-center py-[200px]">
        <div className="w-[2px] h-[300px] bg-b-color"></div>
      </div>
    </section>
  );
}
