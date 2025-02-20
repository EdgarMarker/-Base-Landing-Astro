import React from "react";
import { scrollTo, useGSAP } from "../../../_lib/gsap/base";

interface Props {
  btnText: string;
  className?: string;
  idToScroll: string;
}
const ScrollTo = ({ btnText, className, idToScroll }: Props) => {
  const { contextSafe } = useGSAP();
  const handleScrollTo = contextSafe(() => {
    scrollTo({ idToScroll });
  });
  return (
    <div className={`btn ${className}`} onClick={() => handleScrollTo()}>
      {btnText}
    </div>
  );
};

export default ScrollTo;
