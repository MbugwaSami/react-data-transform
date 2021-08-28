interface TableViewColumn {
  dataIndex: string;
  title: string;
}

interface TableViewProps<T> {
  colums?: Array<TableViewColumn>;
  data?: Array<T>;
}
