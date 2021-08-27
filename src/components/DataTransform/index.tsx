import { ChangeEvent, FC, useEffect, useState } from "react";

//local imports
import "./transform.scss";
import Importer from "../Importer";
import SourceData from "../SourceData";

const DataTransform: FC<DataTransformProps> = (props) => {
  const { sourceData, allowImport, targetDataSet, components, styles } = props;
  const [state, setState] = useState<InitialTransFormState>({
    targetDataSet: [],
    allowImport: false,
    sourceData: [],
    transformRules: {},
    components: {},
    showTransformTool: true,
    styles: {},
  });

  useEffect(() => {
    setState({ ...state, targetDataSet, allowImport: allowImport || false });
    if (sourceData) {
      setState({ ...state, sourceData });
    }
    if (components) {
      setState({ ...state, components });
    }
    if (styles) {
      setState({ ...state, styles });
    }
  });

  return (
    <div tabIndex={0} className="rdt-wrapper">
      {allowImport && <Importer />}
      <SourceData />
    </div>
  );
};

export default DataTransform;
