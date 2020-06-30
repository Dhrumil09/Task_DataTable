import React from "react";
const RawSelect = (props) => {
  return (
    <div className="dataTables_length" id="DataTables_Table_0_length">
      <label>
        Show{" "}
        <select
          name="DataTables_Table_0_length"
          aria-controls="DataTables_Table_0"
          className="form-control input-sm"
          onChange={(e) => {
            let newpagenum =
              Math.floor(
                (props.page_limit * (props.page_no - 1) + 1) /
                  Number(e.target.value)
              ) + 1;
            props.rawLimit(e.target.value, newpagenum === 0 ? 1 : newpagenum);
          }}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>{" "}
        entries
      </label>
    </div>
  );
};
export default RawSelect;
