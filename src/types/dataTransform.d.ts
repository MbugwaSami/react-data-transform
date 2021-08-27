interface DataTransformProps {
  targetDataSet: Array<TargetDataSet>; //Array of target columns to be outputed
  allowImport?: boolean; //allow data source from uploads
  sourceData?: Array<SourceData>;
  transformRules?: TransformRulesProps;
  components?: CustomComponentProps;
  showTransformTool?: boolean;
  styles?: () => {};
}

interface TransformRulesProps {
}

interface SourceData<T extends Data> {
  name: string;
  data: Array<T>;
}

interface Data {
  columnLabel?: string;
}

interface TargetDataSet {
  name: string;
  columns: Array<TargetColumnProps>;
}

interface TargetColumnProps {
  columnLabel: string;
  dataKey: string;
}

interface CustomComponentProps {
  importer?: JSX.Element;
  preview?: JSX.Element;
}

interface InitialTransFormState {
  targetDataSet: Array<TargetDataSet>;
  allowImport: boolean;
  sourceData: Array<SourceData>;
  transformRules: TransformRulesProps;
  components: CustomComponentProps;
  showTransformTool: boolean;
  styles: object;
}
