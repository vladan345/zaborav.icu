import Button from "@/components/Button";

export default function Hero() {
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
          <div className="border-2 border-b-color rounded-[20px] w-full h-full bg-secondary absolute top-[15px] left-[-15px] hover:top-[0] hover:left-[0] transition-all duration-300 ease-in-out"></div>
          <div className="border-2 border-b-color rounded-[20px] w-full h-full bg-green "></div>
        </div>
      </div>
    </section>
  );
}
