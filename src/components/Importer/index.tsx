import { ChangeEvent, FC } from "react";
import "./importer.scss";

const Importer: FC<ImporterProps> = () => {
  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
  };

  return (
    <div className="rdt-importer">
      <label className="rdt-import-label" htmlFor="import-input">
        Choose File
      </label>
      <input
        id="import-input"
        multiple
        type="file"
        onChange={onFileChange}
        aria-label="File Import"
        hidden
      />
    </div>
  );
};

export default Importer;
