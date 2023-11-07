import { Work_Sans } from "next/font/google";
import "./globals.css";

const worksans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Zaborav.icu",
  description:
    "A blog website full of integration tutorials so I don't forget.",
};

export default function RootLayout({ children }) {
  return (
    <html className="light" lang="en">
      <body className={worksans.className}>{children}</body>
    </html>
  );
}
