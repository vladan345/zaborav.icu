import Image from "next/image";

export default function HeroIcon({ icon, isDark, className }) {
  return (
    <div className={`${className} scale-0`}>
      <Image
        src={`/svgs/hero/${icon}-l.svg`}
        width={60}
        height={60}
        alt={`${icon} icon`}
        className={`w-auto h-auto transition duration-300 `}
      />
      <Image
        src={`/svgs/hero/${icon}-d.svg`}
        width={60}
        height={60}
        alt={`${icon} icon`}
        className={`w-auto h-auto transition duration-300 absolute top-[0] left-[0] ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
