import { FC, useEffect, useState } from "react";

//local imports
import "./transform.scss";
import SourceData from "../SourceData";
import TabView from "../TabView";

const DataTransform: FC<TransformComponentProps> = (props) => {
  const { sourceData, allowImport, targetDataSet, components, styles } = props;
  const [state, setState] = useState<InitialTransFormState>({
    targetDataSet: [],
    allowImport: false,
    sourceData: [],
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
  }, []);

  const tabsSvgs = {
    dataSource:
      "M19 13C16.83 13 14.93 14.16 13.88 15.89C13.28 15.96 12.65 16 12 16C7.58 16 4 14.21 4 12V9C4 11.21 7.58 13 12 13S20 11.21 20 9V12C20 12.36 19.9 12.71 19.72 13.05C19.5 13 19.24 13 19 13M12 11C16.42 11 20 9.21 20 7S16.42 3 12 3 4 4.79 4 7 7.58 11 12 11M13.1 17.96C12.74 18 12.37 18 12 18C7.58 18 4 16.21 4 14V17C4 19.21 7.58 21 12 21C12.46 21 12.9 21 13.33 20.94C13.12 20.33 13 19.68 13 19C13 18.64 13.04 18.3 13.1 17.96M20 20V16H18V20H16L19 23L22 20H20Z",
    transformTool:
      "M16.06 13.09L21.69 18.68L18.37 21.96L12.78 16.37V15.45L15.14 13.09H16.06M16.97 10.56L16 9.6L11.21 14.4V16.37L5.58 22L2.3 18.68L7.89 13.09H9.86L10.64 12.31L6.8 8.46H5.5L2.69 5.62L5.31 3L8.11 5.8V7.11L12 10.95L14.66 8.29L13.7 7.28L15 5.97H12.34L11.69 5.32L15 2L15.66 2.66V5.32L16.97 4L20.25 7.28C21.34 8.38 21.34 10.17 20.25 11.26L18.28 9.25L16.97 10.56Z",
    previewTool:
      "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z",
  };

  const renderTabIcon = (svgPath: string) => {
    return (
      <svg style={{ width: "18px", height: "18px" }} viewBox="0 0 24 24">
        <path  d={svgPath} />
      </svg>
    );
  };

  const tabs = [
    { title: "Data Source", icon: renderTabIcon(tabsSvgs.dataSource) },
    { title: "Transform Tool", icon: renderTabIcon(tabsSvgs.transformTool) },
    { title: "Data Preview", icon: renderTabIcon(tabsSvgs.previewTool) },
  ];
  const customStyles: CustomCssPros = {
    tabItem: { height: 30, borderRadius: 0, margin: 0 },
    tabView: { width: "100%" },
  };
  return (
    <div tabIndex={0} className="rdt-wrapper">
      <TabView styles={customStyles} tabs={tabs}>
        <SourceData />
        <SourceData />
        <SourceData />
      </TabView>
    </div>
  );
};

export default DataTransform;
