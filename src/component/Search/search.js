import React from "react";

const Search = (props) => {
  return (
    <div id="DataTables_Table_0_filter" className="dataTables_filter">
      <label>
        Search:{" "}
        <input
          type="search"
          className="form-control input-sm"
          placeholder=""
          aria-controls="DataTables_Table_0"
          onChange={(e) => props.searchData(e.target.value)}
        />
      </label>
    </div>
  );
};
export default Search;
