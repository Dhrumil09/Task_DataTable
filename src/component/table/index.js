import React from "react";
import Tableheader from "./Tableheader/index";
import Tablebody from "./Tablebody/index";

const Table = (props) => {
  return (
    <div className="col-sm-12">
      <table
        className="table dataTables-example dataTable no-footer"
        id="DataTables_Table_0"
        role="grid"
        aria-describedby="DataTables_Table_0_info"
      >
        <Tableheader
          sort_key={props.sort_key}
          sort_asc={props.sort_asc}
          sortData={(data) => props.sortData(data)}
        />
        <Tablebody
          filteredShipments={props.filteredShipments}
          page_limit={props.page_limit}
          page_no={props.page_no}
        />
      </table>
    </div>
  );
};
export default Table;
