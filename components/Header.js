import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full px-5 fixed top-0 h-[120px] flex items-center z-10">
      <div className="flex justify-between w-full">
        <Link href="/" className="button">
          Zaborav.icu
        </Link>

        <nav className="flex gap-5 nav-link absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <Link className="nav-link" href="/">
            Home
          </Link>
          <Link className="nav-link" href="/blogs">
            Blogs
          </Link>
          <Link className="nav-link" href="/techs">
            Techs
          </Link>
          <Link className="nav-link" href="/#contact">
            Contact
          </Link>
          <Link className="nav-link" href="/about">
            About
          </Link>
          {process.env.NODE_ENV === "development" && (
            <Link
              className={`nav-link text-green ${
                theme === "dark" ? "brightness-[1.20]" : "brightness-[.80]"
              }`}
              href="/admin"
            >
              Admin
            </Link>
          )}
        </nav>

        <div onClick={toggleTheme} className="relative">
          <div className="rounded-full w-[60px] h-[30px] border-2 border-b-color bg-green"></div>
          <div className="rounded-full w-[60px] h-[30px] border-2 border-b-color bg-secondary absolute top-[5px] left-[-5px] transition-all duration-300 hover:top-[0] hover:left-[0]">
            <span
              className={`w-[18px] h-[18px] rounded-full border-2 border-b-color bg-green block absolute top-1/2 -translate-y-1/2 transition-all duration-300 ${
                theme === "dark" ? "left-[35px]" : "left-[5px]"
              }`}
            ></span>
          </div>
        </div>
      </div>
    </header>
  );
}
