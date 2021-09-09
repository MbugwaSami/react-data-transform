import { useState, useEffect } from "react";

//Generate table data from source data
export const GetDataViewProps = <T>(
  rawData: Array<ViewDataProps<T>>,
  defaultTableName: string
) => {
  const [viewTabs, setViewTabs] = useState<Array<Tabs>>([]);
  const [tableList, setTableList] = useState<Array<TableViewProps<T>>>([]);

  useEffect(() => {
    let availableTabs = [] as Tabs[];
    let tableList = [] as TableViewProps<T>[];
    if (rawData?.length) {
      rawData.forEach((view, index) => {
        const tableName = view.name
          ? view.name
          : `${defaultTableName}${index + 1}`;
        const tableColumns = Object.keys(view?.data[0]).map(
          (key, keyIndex): TableViewColumn => ({
            title: view?.columnLabels?.[keyIndex]
              ? view.columnLabels?.[keyIndex]
              : `Column${keyIndex + 1}`,
            dataKey: key,
          })
        );
        tableList.push({
          tableName,
          tableData: view.data,
          colums: tableColumns,
        });
        availableTabs.push({
          title: tableName,
        });
      });
    }
    setViewTabs(availableTabs);
    setTableList(tableList);
  }, [rawData?.length, defaultTableName]);
  return { viewTabs, tableList };
};
