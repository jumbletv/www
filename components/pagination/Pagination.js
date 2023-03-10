import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useRouter } from "next/router";

export function Pagination({ pageCount, pageNo, path }) {
  const router = useRouter();
  const { paginationContainer, activePage } = styles;

  const handlePageClick = (event) => {
    router.push(`/${path}/page/${event.selected + 1}`);
  };

  return (
    <div className={paginationContainer}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        activeClassName={activePage}
        forcePage={pageNo - 1}
      />
    </div>
  );
}
