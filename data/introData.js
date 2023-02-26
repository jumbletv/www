import editorialImg from "assets/types/editorial.webp";
import interviewsImg from "assets/types/interviews.webp";
import newsImg from "assets/types/news.webp";
import portraitImg from "assets/types/portrait.webp";
import reviewsImg from "assets/types/reviews.jpg";
import essayImg from "assets/types/essays.jpg";
import featuresImg from "assets/types/features.jpg";
import retroImg from "assets/types/retro.jpeg";
import izabellaImg from "assets/by/izabella.webp";
import natalyaImg from "assets/by/natalya.webp";
import annaImg from "assets/by/anna.jpg";

export const articleTypesData = [
  {
    id: 1,
    headerImg: editorialImg,
    type: "editorials",
    title: "Editorials",
    detail: "type_header_detail_1",
  },
  {
    id: 2,
    headerImg: essayImg,
    type: "essays",
    title: "Essays",
    detail: "type_header_detail_1",
  },
  {
    id: 3,
    headerImg: featuresImg,
    type: "features",
    title: "Features",
    detail: "type_header_detail_1",
  },
  {
    id: 4,
    headerImg: interviewsImg,
    type: "interviews",
    title: "Interviews",
    detail: "type_header_detail_1",
  },
  {
    id: 5,
    headerImg: newsImg,
    type: "news",
    title: "News",
    detail: "type_header_detail_1",
  },
  {
    id: 6,
    headerImg: portraitImg,
    type: "portraits",
    title: "Portraits",
    detail: "type_header_detail_1",
  },
  {
    id: 7,
    headerImg: retroImg,
    type: "retro reports",
    title: "Retro reports",
    detail: "type_header_detail_1",
  },
  {
    id: 8,
    headerImg: reviewsImg,
    type: "reviews",
    title: "Reviews",
    detail: "type_header_detail_1",
  },
];

export const articlesByData = [
  {
    id: 1,
    headerImg: izabellaImg,
    by: "/by/izabella-makukha",
    title: "Izabella Makukha",
    detail:
      "Izabella is a seasoned data scientist with 4+ years of marketing and data analytics experience in the fashion industry. She has a verifiable history of contributing directly to company growth and expansion throughout her career. She is progressive, driven and down-to-earth.",
  },
  {
    id: 2,
    headerImg: natalyaImg,
    by: "/by/natalya-shayk",
    title: "Anna Shvalyuk",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repudiandae quia illum quaerat. Excepturi odit eum nemo possimus, tenetur optio doloremque ab, sint quisquam veniam quae dolore nam, beatae atque.",
  },
  {
    id: 3,
    headerImg: annaImg,
    by: "/by/anna-shvalyuk",
    title: "Anna Shvalyuk",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repudiandae quia illum quaerat. Excepturi odit eum nemo possimus, tenetur optio doloremque ab, sint quisquam veniam quae dolore nam, beatae atque.",
  },
];
