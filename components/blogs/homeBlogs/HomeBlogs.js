import React from "react";
import HomeBlogItem from "../../blogItems/homeBlogItem/HomeBlogItem";
import styles from "./HomeBlogs.module.scss";
import CircleBtn from "../../../common/circleBtn/CircleBtn";

function HomeBlog({ homeBlogData, showBtn }) {
  const { noArticleContainer, homeBlogContainer } = styles;

  if (homeBlogData?.length === 0) {
    return (
      <div className={noArticleContainer}>
        <h1>There are no articles yet</h1>
      </div>
    );
  }

  return (
    <div className={homeBlogContainer}>
      {homeBlogData?.map(
        ({ id, blogImg, date, type, detail, tags, title, link }) => (
          <HomeBlogItem
            id={id}
            key={id}
            blogImg={blogImg}
            date={date}
            type={type}
            detail={detail}
            tags={tags}
            title={title}
            link={link}
          />
        )
      )}
      {showBtn && <CircleBtn />}
    </div>
  );
}

export default HomeBlog;
