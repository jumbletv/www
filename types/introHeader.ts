// Types

type staticImageTypes = {
  src?: string;
  height?: number;
  width?: number;
  blurDataURL?: string;
  blurHeight?: number;
  blurWidth?: number;
};

interface introCommonTypes {
  id: number;
  title: string;
  detail: string;
  headerImg: staticImageTypes;
}

export interface introHeaderTypes extends introCommonTypes {
  type: string;
}

export interface authorDataTypes extends introCommonTypes {
  authorLink: string;
}

// Values

const introCommonValues = {
  id: 1,
  headerImg: {
    src: "/_next/static/media/reviews.cfd9e21f.jpg",
    height: 1080,
    width: 1080,
    blurDataURL:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freviews.cfd9e21f.jpg&w=6&q=70",
    blurHeight: 8,
    blurWidth: 8,
  },
  title: "",
  detail: "",
};

export const introHeaderValues = {
  ...introCommonValues,
  type: "",
};

export const authorDataValues = {
  ...introCommonValues,
  authorLink: "",
};
