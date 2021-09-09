import React from "react";
import { shallow, mount } from "enzyme";
import TabView from "../../components/TabView";
import { tabViewData } from "../mockData";

describe("<TabView Tests />", () => {
  const setState = jest.fn();
  const useStateMock = (initState) => [initState, setState];
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render <TabView />", () => {
    const wrapper = shallow(<TabView {...tabViewData} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render all tab items", () => {
    const wrapper = mount(<TabView {...tabViewData} />);
    const tabElement = wrapper.find(".rdt-tab-item");
    expect(tabElement).toHaveLength(tabViewData.tabs.length);
  });
  it("should change tabs", () => {
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
    const wrapper = mount(<TabView {...tabViewData} />);
    const tabElement = wrapper.find(".rdt-tab-item").at(1);
    tabElement.simulate("click");
    expect(setState).toHaveBeenCalledWith(1);
  });
});
