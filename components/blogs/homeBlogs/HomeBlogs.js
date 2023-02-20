import React from "react";
import HomeBlogItem from "../../blogItems/homeBlogItem/HomeBlogItem";
import styles from "./HomeBlogs.module.scss";
import CircleBtn from "../../../common/circleBtn/CircleBtn";

function HomeBlog({ homeBlogData }) {
  return (
    <div className={styles.homeBlogContainer}>
      {homeBlogData?.map(
        ({ id, blogImg, date, type, detail, tags, title, link }) => (
          <HomeBlogItem
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
      <CircleBtn />
    </div>
  );
}

export default HomeBlog;
