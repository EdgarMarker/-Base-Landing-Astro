import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother, useGSAP);

export { useGSAP };

//* ScrollTo
export const scrollTo = ({ idToScroll, classToScroll }) => {
  let selector = idToScroll ? `#${idToScroll}` : `.${classToScroll}`;

  gsap.to(window, {
    duration: 1,
    scrollTo: selector,
  });
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
export const callMenu = ({ open }) => {
  const navActive = document.querySelector("nav.mobileActive");
  const navBase = document.querySelector("nav.mobile");
  const tl = gsap.timeline();
  tl.to(navBase, {
    display: open ? "none" : "flex",
    top: open ? "-100%" : "0%",
    duration: 1,
  })
  tl.to(navActive, {  
    display: open ? "flex" : "none",
    right: open ? "0%" : "-100%",
    duration: 0.25,
  });
};

//* calling modal
export const callModal = ({ open, className }) => {
  const modal = document.querySelector(className);
  gsap.to(modal, {
    duration: 0.5,
    opacity: open ? 1 : 0,
    scale: open ? 1 : 0.9,
    onStart: () => {
      if (open) {
        modal.style.display = "flex";
        modal.style.pointerEvents = "auto";
      }
    },
    onComplete: () => {
      if (!open) {
        modal.style.display = "none";
        modal.style.pointerEvents = "none";
      }
    },
  });
};

//* All batch
export const batch = () => {
  const Stagger = 0.1;

  // Selección de elementos dentro de ".fadeInOut"
  const h2Elements = document.querySelectorAll(".fadeInOut  h2");
  const h3Elements = document.querySelectorAll(".fadeInOut  h3");
  const pElements = document.querySelectorAll(".fadeInOut  p");
  const imgElements = document.querySelectorAll(".fadeInOut img");

  // Condicional en caso de que existan
  if (h2Elements.length) gsap.set(h2Elements, { opacity: 0, x: -50 });
  if (h3Elements.length) gsap.set(h3Elements, { opacity: 0, x: -50 });
  if (pElements.length) gsap.set(pElements, { opacity: 0, y: 50 });
  if (imgElements.length) gsap.set(imgElements, { opacity: 0, y: 50 });

  ScrollTrigger.batch(
    [".fadeInOut h3", ".fadeInOut h2", ".fadeInOut p", ".fadeInOut img"],
    {
      start: "top 80%",
      end: "top 80%",
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          x: 0,
          stagger: Stagger,
          overwrite: true,
        }),
      onLeave: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          x: 0,
          stagger: Stagger,
          overwrite: true,
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          x: 0,
          stagger: Stagger,
          overwrite: true,
        }),
      onLeaveBack: (batch) =>
        gsap.to(batch, {
          opacity: 0,
          y: 50,
          stagger: Stagger,
          overwrite: true,
        }),
    }
  );
};
