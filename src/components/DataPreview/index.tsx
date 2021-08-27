import { ChangeEvent, FC } from "react";

import "./uploader.scss";
import TableView from "../TableView";

const DataPreview = <T extends object>(props: DataPreviewProps<T>) => {
  const { previewColums, previewData } = props;
  return( <div tabIndex={0} className="rdm-wrapper">

  </div>);
};

export default DataPreview;
