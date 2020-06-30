import React from "react";

const Tablebody = (props) => {
  return (
    <tbody>
      {props.filteredShipments.length > 0
        ? props.filteredShipments
            .slice(
              props.page_no !== 1 ? props.page_limit * (props.page_no - 1) : 0,
              props.page_limit * props.page_no < props.filteredShipments.length
                ? props.page_limit * props.page_no
                : props.filteredShipments.length
            )
            .map((shipment, index) => {
              return (
                <tr role="row" className="odd">
                  <td>{shipment.id}</td>
                  <td>{shipment.name}</td>
                  <td>{shipment.mode}</td>
                  <td>{shipment.type}</td>
                  <td>{shipment.destination}</td>
                  <td>{shipment.origin}</td>
                  <td>{shipment.total}</td>
                  <td>{shipment.status}</td>
                  <td>{shipment.userId}</td>
                </tr>
              );
            })
        : ""}
    </tbody>
  );
};
export default Tablebody;
