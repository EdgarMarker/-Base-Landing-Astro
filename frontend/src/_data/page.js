import { sanityClient } from "sanity:client";

const MODEL__PAGE = `
  setMainPage,
  name,
  slug{
    current
  },
  seo{
    title,
    dsc,
    keywords
  },
  hero{
    id,
    setActive,
    setNav,
    nameNav,
    idNav,
    h1,
    portableText,
    btn,
    img{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    }
  },
  intro{
    id,
    setActive,
    setNav,
    nameNav,
    idNav,
    portableText,
    btn,
    img{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    }
  },
  divisor1{
    id,
    setActive,
    img{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    }
  },
  location{
    id,
    setActive,
    setNav,
    nameNav,
    idNav,
    portableText,
    btn,
    img{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    }
  },
  amenities{
    id,
    setActive,
    setNav,
    nameNav,
    idNav,
    portableText,
    list[]->{
      name,
      img{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    }
    }
  },
  divisor2{
    id,
    setActive,
    img{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    }
  },
  models{
    id,
    setActive,
    setNav,
    nameNav,
    portableText,
    list[]->{
      modelType,
      name,
      techSheet1,
      techSheet2,
      techSheet3,
      gallery[]{
        "media": asset->{
          url
        },
        "alt": asset->{
          altText
        }
      }
    }
  },
  testy{
    id,
    setActive,
    setNav,
    nameNav,
    idNav,
    portableText,
    list[]{
      name,
      img{
        "media": asset->{url},
        "alt": asset->{altText}
      },
      text
    }
  },
  gallery{
    id,
    setActive,
    setNav,
    nameNav,
    idNav,
    portableText,
    list[]{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    }
  },
`;
export const getDataPageMain = async () => {
  const QUERY = `*[_type == 'pages' && setMainPage == true]{${MODEL__PAGE}}`;
  const data = await sanityClient.fetch(QUERY);
  return data[0];
};
export const getDataPage = async () => {
  const QUERY = `*[_type == 'pages' && setMainPage == false]{${MODEL__PAGE}}`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};
export const getDataPageBySlug = async (slug) => {
  const QUERY = `*[_type == 'pages' && setMainPage == false && slug.current == '${slug}']{${MODEL__PAGE}}`;
  const data = await sanityClient.fetch(QUERY);
  return data[0];
};
