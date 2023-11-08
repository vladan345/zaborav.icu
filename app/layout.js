"use client";

import { Work_Sans } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";

const worksans = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={isDark}>
      <html className={isDark ? "dark" : null} lang="en">
        <body className={worksans.className}>
          <header className="w-full px-5 fixed top-0 h-[120px] flex items-center">
            <div className="flex justify-between w-full">
              <Link href="/" className="button">
                Zaborav.icu
              </Link>

              <nav className="flex gap-5 nav-link">
                <Link href="/">Home</Link>
                <Link href="/blogs">Blogs</Link>
                <Link href="/techs">Techs</Link>
                <Link href="/#contact">Contact</Link>
              </nav>

              <div
                onClick={() => {
                  setIsDark(!isDark);
                }}
                className="relative"
              >
                <div className="rounded-full w-[60px] h-[30px] border-2 border-b-color bg-green"></div>
                <div className="rounded-full w-[60px] h-[30px] border-2 border-b-color bg-secondary absolute top-[5px] left-[-5px] transition-all duration-300 hover:top-[0] hover:left-[0]">
                  <span
                    className={`w-[18px] h-[18px] rounded-full border-2 border-b-color bg-green block absolute top-1/2 -translate-y-1/2 transition-all duration-500 ${
                      isDark ? "left-[35px]" : "left-[5px]"
                    }`}
                  ></span>
                </div>
              </div>
            </div>
          </header>
          <main className="px-5">{children}</main>
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
