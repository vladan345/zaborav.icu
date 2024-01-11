"use client";

import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
// import { useTheme } from "@/utils/themeSwitch";
import { ThemeProvider } from "@/context/ThemeContext";

const worksans = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={worksans.className}>
        <ThemeProvider>
          <Header />
          <main className="px-5">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
