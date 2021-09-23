/* Data transform props */
interface TransformComponentProps {
  targetDataSet: Array<TargetDataSet>; //Array of target columns to be outputed
  allowImport?: boolean; //allow data source from uploads
  sourceData?: Array<ViewDataProps>;
  components?: CustomComponentProps;
  showTransformTool?: boolean;
  styles?: CustomCssPros;
}

interface TargetDataSet {
  name: string;
  columns: Array<TargetColumnProps>;
}

interface TargetColumnProps {
  columnLabel?: string;
  dataKey: string;
  transformRule?: TransformRule;
}

interface TransformRule {
  name: string;
  input: Array<Column | TransformRule>;
}

interface Column {
  source: string;
  column: string;
}

type ViewDataProps<T> = {
  name?: string;
  data: Array<T>;
  columnLabels?: Array<string>;
};

interface CustomComponentProps {
  importer?: JSX.Element;
  preview?: JSX.Element;
}

interface InitialTransFormState {
  targetDataSet: Array<TargetDataSet>;
  allowImport: boolean;
  sourceData: Array<ViewDataProps>;
  components: CustomComponentProps;
  showTransformTool: boolean;
  styles: object;
}

type DataPreviewProps<T extends object> = {
  previewData: Array<T>;
  previewColums: Array<string>;
};

interface TransformToolProps {}

/* TableView props */
interface TableViewColumn {
  dataKey: string;
  title: string;
}

interface TableViewProps<T> {
  colums: Array<TableViewColumn>;
  tableData: Array<T>;
  tableName: string;
}

interface DataViewProps<T> {
  viewData: Array<ViewDataProps<T>>;
  defaultName: string;
}

/* TabView props */
interface TabsViewProps {
  tabs: Array<Tabs>;
  children: Array<React.ReactElement>;
  styles?: CustomCssPros;
}

interface Tabs {
  title: string;
  icon?: JSX.Element;
}

interface TabItemProps {
  title: string;
  onClick: () => void;
  active: boolean;
  styles?: React.CSSProperties;
  icon?: JSX.Element;
}

/* Importer props */
interface ImporterProps {}

/* Custom css props */
interface CustomCssPros {
  tabView?: React.CSSProperties;
  tabItem?: React.CSSProperties;
  tabViewHeader?: React.CSSProperties;
}

//Sore props

interface Action {
  type: string;
  payload: any;
}

interface SourceDataReducer {
  tablesData: Array<ViewDataProps>;
}

interface PreviewDataReducer {
  tablesData: Array<ViewDataProps>;
}

interface AppState {
  sourceData: SourceDataReducer;
  previewData: PreviewDataReducer;
}

interface AppReducers {
  sourceData: (state: SourceDataReducer, action: Action) => SourceDataReducer;
  previewData: (
    state: PreviewDataReducer,
    action: Action
  ) => PreviewDataReducer;
}
