import gsap from "gsap/gsap-core";

export function heroFloating() {
  const getRandomNumberWithDecimal = (min, max, increment) =>
    (
      Math.floor(Math.random() * ((max - min) / increment + 1)) * increment +
      min
    ).toFixed(1);

  gsap.to(".icon", {
    scale: 1,
    duration: 0.3,
    stagger: 0.1,
  });
  const icons = gsap.utils.toArray(".icon");
  icons.forEach((icon) => {
    const randomValue = getRandomNumberWithDecimal(2, 3, 0.1);
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(icon, {
      y: 20,
      duration: randomValue,
      ease: "power1.inOut",
    }).to(icon, {
      y: 0,
      duration: randomValue,
      ease: "power1.inOut",
    });
  });
}
