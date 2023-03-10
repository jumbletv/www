import commonStyles from "styles/Common.module.scss";
import Product1 from "assets/products/product-1.webp";
import Product2 from "assets/products/product-2.webp";
import Product3 from "assets/products/product-3.webp";
import Product4 from "assets/products/product-4.png";
import ProductBg1 from "assets/products/product-bg-1.png";
import ProductBg2 from "assets/products/product-bg-2.webp";
import ProductBg3 from "assets/products/product-bg-3.webp";
import ProductBg4 from "assets/products/product-bg-4.webp";
import product1Img1 from "assets/sales/product-1-img-1.webp";
import product1Img2 from "assets/sales/product-1-img-2.webp";
import product1Img3 from "assets/sales/product-1-img-3.webp";
import product2Img1 from "assets/sales/product-2-img-1.png";
import product2Img2 from "assets/sales/product-2-img-2.webp";
import product2Img3 from "assets/sales/product-2-img-3.png";
import product3Img1 from "assets/sales/product-3-img-1.png";
import product3Img2 from "assets/sales/product-3-img-2.jpeg";
import product4Img1 from "assets/sales/product-4-img-1.png";
import product4Img2 from "assets/sales/product-4-img-2.webp";
import product4Img3 from "assets/sales/product-4-img-3.webp";
import product4Img4 from "assets/sales/product-4-img-4.webp";
import charlotteImg from "assets/influencers/charlotte.webp";
import charlotteSecondImg from "assets/influencers/charlotte-second.webp";
import martinImg from "assets/influencers/martin.webp";

const { lightPinkBg, lightBlueBg, darkBlueBg, yellowBg } = commonStyles;

export const salesData = [
  {
    id: 1,
    productBg: ProductBg1,
    productImg: Product1,
    productBgColor: lightPinkBg,
    productTitle: "pulpe de vie",
    productDate: "december 7, 2022",
    productLink: "/sales/pulpe-de-vie",
    influencerLink: "/influencer/charlotte-briand-tanguy",
    productDetail: {
      price: "8.75",
      deliverDate: "October 31, 2022",
      productLabel: "The Cream",
      productPics: [
        { id: 1, pic: product1Img1 },
        { id: 2, pic: product1Img2 },
        { id: 3, pic: product1Img3 },
      ],
      aboutProduct: [
        {
          id: 1,
          description: "produdct_1_description_1",
        },
        {
          id: 2,
          description: "produdct_1_description_2",
        },
        {
          id: 3,
          description: "produdct_1_description_3",
        },
        {
          id: 4,
          description: "produdct_1_description_4",
        },
        {
          id: 5,
          description: "produdct_1_description_5",
        },
        {
          id: 6,
          description: "produdct_1_description_6",
        },
      ],
    },
  },
  {
    id: 2,
    productBg: ProductBg2,
    productImg: Product2,
    productBgColor: lightBlueBg,
    productTitle: "modologie",
    productDate: "october 27, 2022",
    productLink: "/sales/modologie",
    influencerLink: "/influencer/martine-pigassou",
    productDetail: {
      price: "62",
      deliverDate: "October 31, 2022",
      productLabel: "The Cream",
      productPics: [
        { id: 1, pic: product2Img1 },
        { id: 2, pic: product2Img2 },
        { id: 3, pic: product2Img3 },
      ],
      aboutProduct: [
        {
          id: 1,
          heading: "GEL NETTOYANT 240mL",
          description: "produdct_2_description_1",
        },
        {
          id: 2,
          heading: "NOURISH SCRUB",
          description: "produdct_2_description_1",
        },
        {
          id: 3,
          heading: "MASQUE OXYGENE",
          description: "produdct_2_description_1",
        },
      ],
    },
  },
  {
    id: 3,
    productBg: ProductBg3,
    productImg: Product3,
    productBgColor: darkBlueBg,
    productTitle: "danacare",
    productDate: "october 7, 2022",
    productLink: "/sales/danacare",
    influencerLink: "/influencer/charlotte-briand-tanguy",
    productDetail: {
      price: "52.0",
      deliverDate: "October 31, 2022",
      productLabel: "The Cream",
      productPics: [
        { id: 1, pic: product3Img1 },
        { id: 2, pic: product3Img2 },
      ],
      aboutProduct: [
        {
          id: 1,
          description: "produdct_3_description_1",
        },
        {
          id: 2,
          description: "produdct_3_description_2",
        },
        {
          id: 3,
          description: "produdct_3_description_3",
        },
        {
          id: 4,
          description: "produdct_3_description_4",
        },
        {
          id: 5,
          description: "produdct_3_description_5",
        },
        {
          id: 6,
          description: "produdct_3_description_6",
        },
      ],
    },
  },
  {
    id: 4,
    productBg: ProductBg4,
    productImg: Product4,
    productBgColor: yellowBg,
    productTitle: "S & VAË",
    productDate: "OCTOBER 6, 2022",
    productLink: "/sales/s-and-vae",
    influencerLink: "/influencer/charlotte-briand-tanguy",
    productDetail: {
      price: "23.90",
      deliverDate: "October 31, 2022",
      productLabel: "Le Kit Tan & Glow",
      productPics: [
        { id: 1, pic: product4Img1 },
        { id: 2, pic: product4Img2 },
        { id: 3, pic: product4Img3 },
        { id: 4, pic: product4Img4 },
      ],
      aboutProduct: [
        {
          id: 1,
          description: "produdct_4_description_1",
        },
        {
          id: 2,
          description: "produdct_4_description_2",
        },
        {
          id: 3,
          description: "produdct_4_description_3",
        },
      ],
    },
  },
];

export const influencerData = [
  {
    id: 1,
    title: "Charlotte Briand Tanguy",
    headerImg: charlotteImg,
    secondImg: charlotteSecondImg,
    detail: "charlotte_detail",
    influencerLink: "/influencer/charlotte-briand-tanguy",
    products: [
      { id: 1, productLink: "/sales/pulpe-de-vie" },
      { id: 2, productLink: "/sales/danacare" },
      { id: 3, productLink: "/sales/s-and-vae" },
    ],
  },
  {
    id: 2,
    title: "Martine Pigassou",
    headerImg: martinImg,
    detail: "martine_detail",
    influencerLink: "/influencer/martine-pigassou",
    products: [
      {
        id: 1,
        productLink: "/sales/modologie",
      },
    ],
  },
];
