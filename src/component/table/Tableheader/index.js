import React from "react";

const Tableheader = (props) => {
  return (
    <thead>
      <tr role="row">
        <th
          className={
            props.sort_key === "id"
              ? props.sort_asc
                ? "sorting_asc"
                : "sorting_desc"
              : "sorting"
          }
          aria-label="Id"
          onClick={() => props.sortData("id")}
        >
          ID
        </th>
        <th
          className={
            props.sort_key === "name"
              ? props.sort_asc
                ? "sorting_asc"
                : "sorting_desc"
              : "sorting"
          }
          aria-controls="DataTables_Table_0"
          aria-label="name"
          onClick={() => props.sortData("name")}
        >
          Name
        </th>
        <th
          className={
            props.sort_key === "mode"
              ? props.sort_asc
                ? "sorting_asc"
                : "sorting_desc"
              : "sorting"
          }
          aria-controls="DataTables_Table_0"
          aria-label="mode"
          onClick={() => props.sortData("mode")}
        >
          Mode
        </th>
        <th
          className={
            props.sort_key === "type"
              ? props.sort_asc
                ? "sorting_asc"
                : "sorting_desc"
              : "sorting"
          }
          aria-controls="DataTables_Table_0"
          aria-label="type"
          //style={{ width: "120px" }}
          onClick={() => props.sortData("type")}
        >
          Type
        </th>
        <th
          className={
            props.sort_key === "destination"
              ? props.sort_asc
                ? "sorting_asc"
                : "sorting_desc"
              : "sorting"
          }
          aria-controls="DataTables_Table_0"
          aria-label="destination"
          onClick={() => props.sortData("destination")}
        >
          Destination
        </th>
        <th
          className={
            props.sort_key === "origin"
              ? props.sort_asc
                ? "sorting_asc"
                : "sorting_desc"
              : "sorting"
          }
          aria-controls="DataTables_Table_0"
          aria-label="origin"
          onClick={() => props.sortData("origin")}
        >
          Origin
        </th>
        <th
          className={
            props.sort_key === "total"
              ? props.sort_asc
                ? "sorting_asc"
                : "sorting_desc"
              : "sorting"
          }
          aria-controls="DataTables_Table_0"
          aria-label="total"
          onClick={() => props.sortData("total")}
        >
          Total
        </th>
        <th
          className={
            props.sort_key === "status"
              ? props.sort_asc
                ? "sorting_asc"
                : "sorting_desc"
              : "sorting"
          }
          aria-controls="DataTables_Table_0"
          aria-label="status"
          onClick={() => props.sortData("status")}
        >
          Status
        </th>

        <th
          className={
            props.sort_key === "userID"
              ? props.sort_asc
                ? "sorting_asc"
                : "sorting_desc"
              : "sorting"
          }
          aria-label="userId"
          onClick={() => props.sortData("userId")}
        >
          UserId
        </th>
      </tr>
    </thead>
  );
};
export default Tableheader;
