import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useRouter } from "next/router";

export function Pagination({ itemsPerPage, pageCount, pageNo, path }) {
  const router = useRouter();
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { paginationContainer, activePage } = styles;

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  const currentItems = items.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
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
