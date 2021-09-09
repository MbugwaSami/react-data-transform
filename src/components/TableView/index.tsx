import { Fragment } from "react";

import "./tableView.scss";

const TableView = <T extends { [key: string]: any }>(
  props: TableViewProps<T>
) => {
  const { colums, tableData, tableName } = props;

  const RenderColums = () => {
    return (
      <tr className="rdt-table-head">
        {colums?.map((column) => {
          return <th key={column.dataKey}>{column.title}</th>;
        })}
      </tr>
    );
  };

  const RenderRows = () => {
    return (
      <Fragment>
        {tableData?.map((row) => {
          return (
            <tr key={row?.id} className="rdt-table-row">
              {colums?.map((column) => {
                return (
                  <td key={column.dataKey + row?.id}>{row[column.dataKey]}</td>
                );
              })}
            </tr>
          );
        })}
      </Fragment>
    );
  };

  return (
    <div className="rdt-table-view">
      {!tableData?.length ? (
        <div className="rdt-empty-table">{tableName} has no data </div>
      ) : (
        <table className="rdt-table">
          <thead>
            <RenderColums />
          </thead>
          <tbody>
            <RenderRows />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableView;
