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
  location: Location;
  amenities: Amenities;
  divisor2: Divisor;
  models: Models;
  testy: Testy;
  gallery: Gallery;
  form: Form;
}

interface Location {
  id: number;
  setActive: boolean;
  setNav: boolean;
  nameNav: string;
  idNav: string;
  h1?: string;
  portableText: BlockContent[];
  btn?: string;
  btnLink?: string;
  img: Img;
  imgPin: Img;
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

interface Form {
  script: string;
}
//https://adcorp.mx/altare/
