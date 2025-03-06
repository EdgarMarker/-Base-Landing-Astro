import React from "react";
import { scrollTo, useGSAP } from "../../../_lib/gsap/base";

interface Props {
  btnText: string;
  className?: string;
  idToScroll?: string;
  classToScroll?: string;
}
const ScrollTo = ({ btnText, className, idToScroll, classToScroll }: Props) => {
  const { contextSafe } = useGSAP();
  const handleScrollTo = contextSafe(() => {
    scrollTo({ idToScroll, classToScroll });
  });
  return (
    <div className={`btn ${className}`} onClick={() => handleScrollTo()}>
      {btnText}
    </div>
  );
};

export default ScrollTo;
