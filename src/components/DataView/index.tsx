import { GetDataViewProps } from "../../utils";
import TableView from "../TableView";
import TabView from "../TabView";
import "./dataview.scss";

const DataView = <T extends object>(props: DataViewProps<T>) => {
  const { viewData, defaultName } = props;
  const { viewTabs, tableList } = GetDataViewProps(viewData, defaultName);
  return (
    <div className="rdt-data-view">
      {viewData?.length ? (
        <TabView tabs={viewTabs}>
          {viewTabs.map((tab, index) => (
            <TableView key={tab.title} {...tableList[index]} />
          ))}
        </TabView>
      ) : null}
    </div>
  );
};

export default DataView;
