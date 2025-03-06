import {
  PortableText,
  type PortableTextComponentProps,
  type PortableTextBlock,
} from "@portabletext/react";
import React from "react";
import type { BlockContent } from "../../../_types/_globals";
import { batch, useGSAP } from "../../../_lib/gsap/base";

interface Props {
  data: BlockContent[];
}

const PortableTextCustom = ({ data }: Props) => {
  useGSAP(() => batch(), []);
  return (
    <div className="fadeInOut">
      <PortableText value={data} />
    </div>
  );
};

export default PortableTextCustom;
