import type {
  BlockContent,
  Divisor,
  Img,
  Section,
  Seo,
  Slug,
} from "./_globals";

export interface Page {
  name: string;
  slug: Slug;
  seo: Seo;
  hero: Section;
  intro: Section;
  divisor1: Divisor;
  location: Section;
  amenities: Amenities;
  divisor2: Divisor;
  models: Models;
  testy: Testy;
  gallery: Gallery;
}

interface Amenities {
  id: number;
  setActive: boolean;
  setNav: boolean;
  nameNav: string;
  idNav: string;
  portableText: BlockContent[];
  list: {
    name: string;
    img: Img;
  }[];
}
interface Models {
  id: number;
  setActive: boolean;
  setNav: boolean;
  nameNav: string;
  idNav: string;
  portableText: BlockContent[];
  list: {
    modelType: string;
    name: string;
    techSheet1: BlockContent[];
    techSheet2: BlockContent[];
    techSheet3: BlockContent[];
    gallery: Img[];
  }[];
}
interface Testy {
  id: number;
  setActive: boolean;
  setNav: boolean;
  nameNav: string;
  idNav: string;
  portableText: BlockContent[];
  list: {
    name: string;
    img: Img;
    text: string;
  }[];
}

interface Gallery {
  id: number;
  setActive: boolean;
  setNav: boolean;
  nameNav: string;
  idNav: string;
  portableText: BlockContent[];
  list: Img[];
}

//https://adcorp.mx/altare/
