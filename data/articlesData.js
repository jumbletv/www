import articleImg1 from "../assets/articles/article-1.webp";
import articleImg2 from "../assets/articles/article-2.webp";
import articleImg3 from "../assets/articles/article-3.webp";
import articleImg4 from "../assets/articles/article-4.webp";
import articleImg5 from "../assets/articles/article-5.webp";
import articleImg6 from "../assets/articles/article-6.webp";
import articleImg7 from "../assets/articles/article-7.webp";
import articleImg8 from "../assets/articles/article-8.webp";
import articleImg9 from "../assets/articles/article-9.webp";
import articleImg10 from "../assets/articles/article-10.webp";
import articleImg11 from "../assets/articles/article-11.jpeg";
import articleImg12 from "../assets/articles/article-12.jpeg";

const placeholderArticleContent = [
  {
    id: 1,
    para: "blog_1_para_1",
    embed: [
      {
        id: 1,
        url: "https://www.instagram.com/p/Cj2OgQ0riVP",
        type: "instagram",
      },
    ],
    matchTexts: [
      {
        id: 1,
        matchText: "blog_1_para_1_matchText_1",
        linkText: "blog_1_para_1_linkText_1",
        linkTo: "/the-jumblog",
      },
    ],
    list: {
      listHeading: "For instance:",
      lists: [
        {
          id: 1,
          listItem: "Your content should resonate with the audience",
        },
        { id: 2, listItem: "You should use the right livestream software" },
        {
          id: 3,
          listItem:
            "Your content and host should be fun enough to captivate the audience",
        },
        {
          id: 4,
          listItem:
            "Troubleshoot any technical issues before getting into the action",
        },
        { id: 5, listItem: "And, more" },
      ],
    },
  },
  {
    id: 2,
    para: "blog_1_para_2",
    heading: "La bouche rouge",
    matchTexts: [
      {
        id: 1,
        matchText: "blog_1_para_2_matchText_1",
        linkText: "blog_1_para_2_linkText_1",
        linkTo: "/the-jumblog/lipstick",
      },
    ],
    embed: [
      {
        id: 1,
        url: "https://www.tiktok.com/embed/v2/7158537663904009477?lang=en",
        type: "tiktok",
      },
    ],
    influencer: {
      name: "marimariamakeup",
      url: "https://www.tiktok.com/@marimariamakeup?lang=fr",
      followers: "3.4 M followers",
    },
  },
];

export const articlesData = [
  {
    id: 1,
    img: articleImg1,
    date: "NOVEMBER 9, 2022",
    type: "news",
    by: "/by/izabella-makukha",
    title: "blog_1_title",
    link: "/the-jumblog/why-sustainable-beautiful-is-here-to-stay",
    detail: "blog_1_detail",
    tags: [
      { id: 1, tag: "beauty", url: "/tag/beauty" },
      { id: 2, tag: "eco", url: "/tag/eco" },
      { id: 3, tag: "green", url: "/tag/green" },
      { id: 4, tag: "beauty industry", url: "/tag/beauty-industry" },
    ],
    placeholderArticleContent,
  },
  {
    id: 2,
    img: articleImg2,
    date: "NOVEMBER 2, 2022",
    type: "news",
    by: "/by/natalya-shayk",
    title: "CHOOSING THE RIGHT EYESHADOW FOR YOUR EYE COLOUR",
    link: "/the-jumblog/choosing-the-right-eyeshadow-for-your-eye-colour",
    detail:
      "Just like finding the perfect foundation, you want to take your complexion into account when choosing the right eyeshadow for you. It all starts by finding the shade that perfectly complements your eye colour. Your eyes are the window to your soul, and you want to do accentuate them in every makeup look. Everything from your choice of mascara to eyeshadow and liner can transform your makeup look. We’re deep diving into the world of eyeshadows to help you find the perfect shade for your eye colour.",
    tags: [
      { id: 1, tag: "make up", url: "/tag/make-up" },
      { id: 2, tag: "genz", url: "/tag/gen-z" },
      { id: 3, tag: "colore", url: "/tag/colore" },
    ],
    placeholderArticleContent,
  },
  {
    id: 3,
    img: articleImg3,
    date: "OCTOBER 25, 2022",
    type: "news",
    by: "/by/izabella-makukha",
    title: "TOP 10 MOST POPULAR MAKEUP INFLUENCERS ON TIKTOK",
    link: "/the-jumblog/top-10-most-popular-makeup-influencer-on-tiktok",
    detail:
      "There are so many makeup influencers on TikTok nowadays, that it can be hard to decide who you want to follow. Of course, you can follow more than one makeup influencer, but it can be nice to have an overview of which influencers are the most popular. That’s why we made a list of the top 10 most popular makeup influencers on TikTok.",
    tags: [
      { id: 1, tag: "Tiktok", url: "/tag/tiktok" },
      { id: 2, tag: "makeup", url: "/tag/make-up" },
      { id: 3, tag: "social", url: "/tag/social" },
      { id: 4, tag: "trends", url: "/tag/trends" },
    ],
    placeholderArticleContent,
  },
  {
    id: 4,
    img: articleImg4,
    date: "OCTOBER 11, 2022",
    type: "news",
    by: "/by/natalya-shayk",
    title: "BEST VIRAL TIKTOK BEAUTY PRODUCTS",
    link: "/the-jumblog/best-viral-tiktok-beauty-products",
    detail:
      "There are so many beauty products and brands that you sometimes can simply no longer keep track. If you are searching for a new beauty product, TikTok is a great platform to do some research on. Loads of beauty influencers give you the best advice and that results in some great, viral beauty products. We’ve listed some of the best, so you have a nice overview of the best viral TikTok beauty products there are.",
    tags: [
      { id: 1, tag: "Tiktok", url: "/tag/tiktok" },
      { id: 2, tag: "social", url: "/tag/social" },
      { id: 3, tag: "beauty", url: "/tag/beauty" },
      { id: 4, tag: "makeup", url: "/tag/make-up" },
    ],
    placeholderArticleContent,
  },
  {
    id: 5,
    img: articleImg5,
    date: "SEPTEMBER 6, 2022",
    type: "news",
    by: "/by/izabella-makukha",
    title: "10 BEAUTY INFLUENCERS TO FOLLOW ON INSTAGRAM",
    link: "/the-jumblog/10-beauty-influencer-to-follow-on-instagram",
    detail:
      "Do you ever find yourself going for a late-night scroll through your Instagram? If you’re in need of some inspiration to take your makeup to the next level, look no further than Instagram. We’re sharing 13 beauty influencers that deserve a spot on your follow list. Each offer something different and can help you find the perfect makeup routine for you.",
    tags: [
      { id: 1, tag: "social", url: "/tag/social" },
      { id: 2, tag: "beauty", url: "/tag/beauty" },
      { id: 3, tag: "beauty care", url: "/tag/beauty-care" },
    ],
    placeholderArticleContent,
  },
  {
    id: 6,
    img: articleImg6,
    date: "AUGUST 30, 2022",
    type: "news",
    by: "/by/izabella-makukha",
    title: "WHAT ARE THE TIKTOK MAKEUP HACKS?",
    link: "/the-jumblog/what-are-the-tiktok-makeup-hacks",
    detail:
      "Loads of people love to do makeup. It can give you that extra glow or it can give you a little bit more confidence. Another great thing about makeup, is that you can keep learning new tips and tricks. An amazing platform to learn these things is TikTok. All the amazing TikTok makeup influencers love to share their favourite hacks and that doesn’t stay unnoticed. We have search for some of these amazing hacks and we’ve put them in a list, so that you can try them all out yourself.",
    tags: [
      { id: 1, tag: "Tiktok", url: "/tag/tiktok" },
      { id: 2, tag: "social", url: "/tag/social" },
      { id: 3, tag: "beauty", url: "/tag/beauty" },
      { id: 4, tag: "makeup", url: "/tag/make-up" },
    ],
    placeholderArticleContent,
  },
  {
    id: 7,
    img: articleImg7,
    date: "AUGUST 16, 2022",
    type: "news",
    by: "/by/natalya-shayk",
    title: "MEET OUR NEW GO-TO TIKTOK MAKEUP TUTORIAL",
    link: "/the-jumblog/meet-our-new-go-to-tiktok-makeup-toturial",
    detail:
      "When we need a new makeup look, we head straight to TikTok. We love that the short videos give you everything you need to create a makeup look without spending 30-minutes watching a tutorial. One of our favourite go-to TikTok tutorials is less than 60 seconds. In the same time that it takes to mobile order your Starbucks drink, you can discover a whole new makeup look.",
    tags: [
      { id: 1, tag: "Tiktok", url: "/tag/tiktok" },
      { id: 2, tag: "makeup", url: "/tag/make-up" },
      { id: 3, tag: "trends", url: "/tag/trends" },
      { id: 4, tag: "social", url: "/tag/social" },
    ],
    placeholderArticleContent,
  },
  {
    id: 8,
    img: articleImg8,
    date: "AUGUST 2, 2022",
    type: "news",
    by: "/by/izabella-makukha",
    title: "THE HOTTEST TIKTOK TRENDS FOR SUMMER 2022",
    link: "/the-jumblog/the-hottest-tiktok-trends-for-summer-2022",
    detail:
      "Summer 2022 is all about TikTok trends . Whatever you think of TikTok, it’s clear that the social media platform is dominating trends everywhere we look. Thanks to TikTok, we’ve all embraced the idea of DIY fashion and beauty tips and tricks. Whether it was teaching you how to do curtain bangs or tie-dye your old loungewear, TikTok is responsible for the must-follow fashion trends of summer 2022. If you’re building your summer closet or want to try a new beauty trend, TikTok is setting the style for summer 2022. Our guide to the hottest TikTok trends tells you all you need to know for summer 2022. Read on to get a taste of the biggest trends that are right around the corner.",
    tags: [
      { id: 1, tag: "Tiktok", url: "/tag/tiktok" },
      { id: 2, tag: "trends", url: "/tag/trends" },
      { id: 3, tag: "outfits", url: "/tag/outfits" },
      { id: 4, tag: "apparel", url: "/tag/apparel" },
    ],
    placeholderArticleContent,
  },
  {
    id: 9,
    img: articleImg9,
    date: "JULY 19, 2022",
    type: "news",
    by: "/by/anna-shvalyuk",
    title: "THE TIKTOK FASHION TRENDS EVERY INFLUENCER IS WEARING RIGHT NOW",
    link: "/the-jumblog/the-tiktok-fashion-trends-every-influencer-is-wearing-right-now",
    detail:
      "Before the pandemic, most of us thought of TikTok as an app where Gen Z did dance routines. Flash forward a year, and the social media app is dominating everything from the music industry to fashion trends. It’s brought around the popularity of tie-dye, brought aesthetics like cottagecore into the mainstream, and even cancelled skin jeans. If you take a scroll through your ‘for you page’ on the app, you’re guaranteed to come across a few familiar trends. With big-name influencers (and celebrities!) jumping onto TikTok to capitalise on their popularity, it’s not surprising to see that some of them are embracing the TikTok fashion trends.",
    tags: [
      { id: 1, tag: "social", url: "/tag/social" },
      { id: 2, tag: "trends", url: "/tag/trends" },
      { id: 3, tag: "fashion", url: "/tag/fashion" },
      { id: 4, tag: "apps", url: "/tag/apps" },
      { id: 5, tag: "style", url: "/tag/style" },
      { id: 6, tag: "TikTok", url: "/tag/tiktok" },
    ],
    placeholderArticleContent,
  },
  {
    id: 10,
    img: articleImg10,
    date: "JULY 5, 2022",
    type: "news",
    by: "/by/izabella-makukha",
    title: "TIKTOK FASHION TRENDS EVERYONE'S OBSESSED WITH",
    link: "/the-jumblog/tiktok-fashion-trends-everyone-obsessed-with",
    detail:
      "TikTok is an app most of us swore to stay away from before the pandemic. A lot can change in a year. It’s now an app we look at before even checking out Instagram or Twitter. The app, which is dominated by Generation Z and Millennials, has come to dominate the fashion trends. Who would have thought the app would have the power to cancel skinny jeans? We’re rounding up a few of our favourite fashion trends from TikTok that everyone is obsessed with.",
    tags: [
      { id: 1, tag: "fashion", url: "/tag/fashion" },
      { id: 2, tag: "genz", url: "/tag/genz" },
      { id: 3, tag: "social", url: "/tag/social" },
      { id: 4, tag: "style", url: "/tag/style" },
      { id: 5, tag: "apps", url: "/tag/apps" },
    ],
    placeholderArticleContent,
  },
  {
    id: 11,
    img: articleImg11,
    date: "JULY 5, 2022",
    type: "editorials",
    by: "/by/izabella-makukha",
    title: "9 LIVESTREAMING MISTAKES TO AVOID",
    link: "/the-jumblog/9-livestreaming-mistakes-to-avoid",
    detail:
      "Livestreaming industry has been seeing exponential growth in the past few years. And, it’s not just the pandemic that’s driving its popularity; the consumer behavior is making it more relevant than ever. As more and more brands jump on the bandwagon of livestreaming, you need to up your game. Avoiding a few common and underrated mistakes can make your livestreams more effective. In this article, we discuss the 9 livestreaming mistakes that you want to avoid for maximum results. Let’s get into them.",
    tags: [
      { id: 1, tag: "fashion", url: "/tag/fashion" },
      { id: 2, tag: "genz", url: "/tag/genz" },
      { id: 3, tag: "social", url: "/tag/social" },
      { id: 4, tag: "style", url: "/tag/style" },
      { id: 5, tag: "apps", url: "/tag/apps" },
    ],
    placeholderArticleContent,
  },
  {
    id: 12,
    img: articleImg12,
    date: "JULY 5, 2022",
    type: "editorials",
    by: "/by/izabella-makukha",
    title: "TIKTOK FASHION TRENDS EVERYONE'S OBSESSED WITH",
    link: "/the-jumblog/tiktok-fashion-trends-everyone-obsessed-with",
    detail:
      "TikTok is an app most of us swore to stay away from before the pandemic. A lot can change in a year. It’s now an app we look at before even checking out Instagram or Twitter. The app, which is dominated by Generation Z and Millennials, has come to dominate the fashion trends. Who would have thought the app would have the power to cancel skinny jeans? We’re rounding up a few of our favourite fashion trends from TikTok that everyone is obsessed with.",
    tags: [
      { id: 1, tag: "fashion", url: "/tag/fashion" },
      { id: 2, tag: "genz", url: "/tag/genz" },
      { id: 3, tag: "social", url: "/tag/social" },
      { id: 4, tag: "style", url: "/tag/style" },
      { id: 5, tag: "apps", url: "/tag/apps" },
    ],
    placeholderArticleContent,
  },
];
