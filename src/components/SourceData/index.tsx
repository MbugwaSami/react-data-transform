import DataView from "../DataView";

const SourceData = () => {
  const data = [
    {
      c1: "1",
      c2: "1",
      c3: "1",
      c4: "1",
      c5: "1",
    },
    {
      c1: "1",
      c2: "1",
      c3: "1",
      c4: "1",
      c5: "1",
    },
    {
      c1: "1",
      c2: "1",
      c3: "1",
      c4: "1",
      c5: "1",
    },
    {
      c1: "1",
      c2: "1",
      c3: "1",
      c4: "1",
      c5: "1",
    },
  ];

  const sampleData = [
    {
      name: "Table 1",
      data: data,
    },
    {
      name: "Table 1",
      data: data,
    },
    {
      name: "Table 1",
      data: data,
    },
    {
      data: data,
    },
    {
      name: "Table last",
      data: [data[0]],
      columnLabels: ['Sammy', 'test', 'this']
    },
  ];

  return (
    <div style={{ height: 40 }} className="rdt-section-body rdt-source-data">
      <DataView defaultName="Source" viewData={sampleData} />
    </div>
  );
};

export default SourceData;
