import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {
  return (
    <div
      className="dataTables_paginate paging_simple_numbers"
      id="DataTables_Table_0_paginate"
    >
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(props.data.length / props.page_limit)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={(pagenum) => {
          props.pageChange(pagenum.selected);
        }}
        forcePage={props.page_no - 1}
        containerClassName={"pagination mt-3"}
        activeClassName={"active"}
      />
    </div>
  );
};
export default Pagination;
