import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother, useGSAP);

export { useGSAP };

//* ScrollTo
export const scrollTo = ({ idToScroll }) => {
  gsap.to(window, { duration: 1, scrollTo: `#${idToScroll}` });
};

//*ScrollSmoother
export const scrollSmoother = () => {
  let mm = gsap.matchMedia();
  mm.add("(min-width: 1024px)", () => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  });
};
