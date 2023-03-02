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
import martinImg from "assets/influencers/martin.webp";

const { lightPinkBg, lightBlueBg, darkBlueBg, yellowBg } = commonStyles;

export const productsData = [
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
      price: "62",
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
          description:
            "The Cream : une crème hydratante universelle visage à la pêche BIO pour hydrater naturellement tous les types de peaux au quotidien.",
        },
        {
          id: 2,
          description:
            "Frimousse : Une mousse nettoyante éclat à la tomate BIO anti-gaspi qui nettoie efficacement, purifie et réveille le teint. Débarrassées de leurs impuretés, les peaux ternes retrouvent de l’éclat !",
        },
        {
          id: 3,
          description:
            "Sucré frappé : Gommage et masque au pamplemousse BIO qui exfolie naturellement la peau et la purifie en profondeur. ",
        },
        {
          id: 4,
          description:
            "Au bal masqué : coffret de 3 masques en tissu de coton BIO et biodégradable pour redonner du peps à la peau en 10min chrono.",
        },
        {
          id: 5,
          description:
            "Cocoon addiction : un baume nourrissant à la texture onctueuse qui nourrit intensément la peau.",
        },
        {
          id: 6,
          description:
            "Oh my gold : une huile sèche multi-usage à la figue BIO.",
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
          description:
            "The Cream : une crème hydratante universelle visage à la pêche BIO pour hydrater naturellement tous les types de peaux au quotidien.",
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
      price: "62",
      deliverDate: "October 31, 2022",
      productLabel: "The Cream",
      productPics: [
        { id: 1, pic: product3Img1 },
        { id: 2, pic: product3Img2 },
      ],
      aboutProduct: [
        {
          id: 1,
          description:
            "The Cream : une crème hydratante universelle visage à la pêche BIO pour hydrater naturellement tous les types de peaux au quotidien.",
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
      price: "62",
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
          description:
            "The Cream : une crème hydratante universelle visage à la pêche BIO pour hydrater naturellement tous les types de peaux au quotidien.",
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
