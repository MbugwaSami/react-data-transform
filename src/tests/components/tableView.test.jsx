import { mount } from "enzyme";
import TableView from "../../components/TableView";
import { tableDataMock, tableColumnsMock } from "../mockData";

describe("Table View ", () => {
  let wrapper;
  const tableProps = {
    tableData: tableDataMock,
    colums: tableColumnsMock,
  };
  beforeEach(() => {
    wrapper = mount(<TableView {...tableProps} />);
  });
  it("should render <TabView />", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should render a table with all rows", () => {
    expect(wrapper.find(".rdt-table").length).toBe(1);
    expect(wrapper.find(".rdt-table-head").length).toBe(1);
    expect(wrapper.find(".rdt-table-row").length).toBe(tableDataMock.length);
  });

  it("should render a table with all columns", () => {
    expect(wrapper.find(".rdt-table").length).toBe(1);
    expect(wrapper.find(".rdt-table-head").children().length).toBe(
      tableColumnsMock.length
    );
    expect(wrapper.find(".rdt-table-row").at(1).children().length).toBe(
      tableColumnsMock.length
    );
  });

  it("should render a div with a message when there is no data ", () => {
    wrapper.setProps({ tableData: [] });
    expect(wrapper.find(".rdt-table").length).toBe(0);
    expect(wrapper.find("div.rdt-empty-table").length).toBe(1);
  });
});
