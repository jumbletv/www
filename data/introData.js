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
    title: "editorials_title",
    detail: "editorials_detail",
  },
  {
    id: 2,
    headerImg: essayImg,
    type: "essays",
    title: "essays_title",
    detail: "essays_detail",
  },
  {
    id: 3,
    headerImg: featuresImg,
    type: "features",
    title: "features_title",
    detail: "features_detail",
  },
  {
    id: 4,
    headerImg: interviewsImg,
    type: "interviews",
    title: "interviews_title",
    detail: "interviews_detail",
  },
  {
    id: 5,
    headerImg: newsImg,
    type: "news",
    title: "news_title",
    detail: "news_detail",
  },
  {
    id: 6,
    headerImg: portraitImg,
    type: "portraits",
    title: "portraits_title",
    detail: "portraits_detail",
  },
  {
    id: 7,
    headerImg: retroImg,
    type: "retro reports",
    title: "retro_reports_title",
    detail: "retro_reports_detail",
  },
  {
    id: 8,
    headerImg: reviewsImg,
    type: "reviews",
    title: "reviews_title",
    detail: "reviews_detail",
  },
];

export const articlesByData = [
  {
    id: 1,
    headerImg: izabellaImg,
    autherLink: "/by/izabella-makukha",
    title: "Izabella Makukha",
    detail: "izabella_detail",
  },
  {
    id: 2,
    headerImg: natalyaImg,
    autherLink: "/by/natalya-shayk",
    title: "Natalya Shayk",
    detail: "natalya_detail",
  },
  {
    id: 3,
    headerImg: annaImg,
    autherLink: "/by/anna-shvalyuk",
    title: "Anna Shvalyuk",
    detail: "anna_detail",
  },
];
