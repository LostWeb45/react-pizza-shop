import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

type PaginationPorops = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

const Pagination: React.FC<PaginationPorops> = ({
  currentPage,
  onChangePage,
}) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="<"
    />
  );
};

export default Pagination;
