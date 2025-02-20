const MODEL__PAGE = `
  name,
  contact{
    portableText,
    tel,
    email,
    dir,
    dirLink,
    social[]{
      name,
      url
    },
    img{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
    imgNav{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    }
  },
  privacy{
    portableText
  },
  colors{
    primary{
      hex
    },
    primaryLight{
      hex
    },
    primaryDark{
      hex
    },
    secondary{
      hex
    },
    secondaryLight{
      hex
    },
    secondaryDark{
      hex
    },
    accent{
      hex
    }
  }`;

export const getDataCompany = async () => {
  const QUERY = `*[_type == 'company']{${MODEL__PAGE}}`;
  const data = await sanityClient.fetch(QUERY);
  return data[0];
};
