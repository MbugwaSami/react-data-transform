import { ChangeEvent } from "react";

const TableView = <T extends object>(props: TableViewProps<T>) => {
  const { colums, data } = props;

  const renderColums = () => {
    return (
      <tr>
      </tr>
    );
  };

  const renderRows = () => {};

  return (
    <div className="rdt-table-view">
      <table>
        <thead>{renderColums()}</thead>
      </table>
    </div>
  );
};

export default TableView;
