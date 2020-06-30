import React from "react";

const Totalraw = (props) => {
  return (
    <div className="col-sm-5">
      <div
        className="dataTables_info"
        id="DataTables_Table_0_info"
        role="status"
        aria-live="polite"
      >{`Showing ${
        props.data.length !== 0 ? props.page_limit * (props.page_no - 1) + 1 : 0
      } to ${
        props.page_limit * props.page_no < props.data.length
          ? props.page_limit * props.page_no
          : props.data.length
      } of ${props.data.length} entries`}</div>
    </div>
  );
};
export default Totalraw;
