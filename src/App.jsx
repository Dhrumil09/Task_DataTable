import React, { Component } from "react";
import getData from "../src/Services/index";
import Pagination from "./component/Pagination/pagination.js";
import Totalraw from "./component/Totalraw/totalraw.js";
import Table from "./component/table/index.js";
import Search from "./component/Search/search";
import RawSelect from "./component/RawSelect/RawSelect";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page_no: 1,
      page_limit: 10,
      sort_key: "",
      sort_asc: true,
      filteredShipments: [],
      isLoaded: false,
      page_data: [],
    };
  }
  componentDidMount() {
    getData().then((res) => this.setState({ page_data: res, isLoaded: true }));
  }
  pageChange = (Pagenum) => {
    this.setState({ page_no: Pagenum + 1 });
  };
  rawLimit = (pageLimit, pageno) => {
    this.setState({ page_limit: pageLimit, page_no: pageno });
  };
  searchData = (searchText) => {
    const { page_data } = this.state;
    const filteredShipments = page_data.filter(
      (obj) =>
        obj.id.toLowerCase().includes(searchText.toLowerCase()) ||
        obj.name.toLowerCase().includes(searchText.toLowerCase()) ||
        obj.mode.toLowerCase().includes(searchText.toLowerCase()) ||
        obj.type.toLowerCase().includes(searchText.toLowerCase()) ||
        obj.destination.toLowerCase().includes(searchText.toLowerCase()) ||
        obj.origin.toLowerCase().includes(searchText.toLowerCase()) ||
        obj.total.toLowerCase().includes(searchText.toLowerCase()) ||
        obj.status.toLowerCase().includes(searchText.toLowerCase()) ||
        obj.userId.toLowerCase().includes(searchText.toLowerCase())
    );
    this.setState({ filteredShipments, page_search: searchText });
  };

  sortData = (Key) => {
    const { filteredShipments, sort_key, sort_asc } = this.state;
    let sortAsc;
    let sortedData;
    if (sort_key === Key) {
      if (sort_asc) {
        sortedData = filteredShipments.sort((a, b) =>
          typeof a[Key] == "string" || typeof b[Key] == "string"
            ? b[Key].localeCompare(a[Key])
            : b[Key] < a[Key]
            ? -1
            : 1
        );
        sortAsc = false;
      } else {
        sortedData = filteredShipments.sort((a, b) =>
          typeof a[Key] == "string" || typeof b[Key] == "string"
            ? a[Key].localeCompare(b[Key])
            : a[Key] < b[Key]
            ? -1
            : 1
        );
        sortAsc = true;
      }
    } else {
      sortedData = filteredShipments.sort((a, b) =>
        typeof a[Key] == "string" || typeof b[Key] == "string"
          ? a[Key].localeCompare(b[Key])
          : a[Key] < b[Key]
          ? -1
          : 1
      );
      sortAsc = true;
    }

    // let sortedData = auditTrailData.data.sort(function(a, b){ return sort(a, b)})
    this.setState({
      filteredShipments: sortedData,
      sort_key: Key,
      sort_asc: sortAsc,
    });
  };
  render() {
    const {
      filteredShipments,
      page_no,
      page_limit,
      sort_key,
      sort_asc,
      page_data,
      isLoaded,
    } = this.state;
    console.log("daya", page_data);
    if (isLoaded === true || filteredShipments.length < 0) {
      console.log(filteredShipments, isLoaded);
      this.setState({ filteredShipments: page_data, isLoaded: false });
    }
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <RawSelect
              page_limit={page_limit}
              page_no={page_no}
              rawLimit={(pageLimit, pageno) => this.rawLimit(pageLimit, pageno)}
            />
          </div>
          <div className="col-sm-6">
            <Search
              searchData={(search_value) => this.searchData(search_value)}
            />
          </div>
        </div>
        <div className="row table-responsive" style={{ marginBottom: "10px" }}>
          <Table
            filteredShipments={filteredShipments}
            page_limit={page_limit}
            page_no={page_no}
            sort_key={sort_key}
            sort_asc={sort_asc}
            sortData={(data) => this.sortData(data)}
          />
        </div>
        <div className="row">
          <Totalraw
            data={filteredShipments}
            page_limit={page_limit}
            page_no={page_no}
          />
          <div className="col-sm-7">
            <Pagination
              data={filteredShipments}
              page_limit={page_limit}
              page_no={page_no}
              pageChange={(PageNum) => this.pageChange(PageNum)}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
