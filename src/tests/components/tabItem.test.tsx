import React from "react";
import { shallow, render, mount } from "enzyme";
import TabItem from "../../components/TabView/TabItem";

describe("<TabItem />", () => {
  const onTabClickMock = jest.fn();
  const renderTabIcon = () => {
    return <div></div>;
  };
  const props = {
    title: "title",
    active: false,
    icon: renderTabIcon(),
    onClick: onTabClickMock,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render <TabItem />", () => {
    const wrapper = shallow(<TabItem {...props} />);
    const tabElement = wrapper.find(".rdt-tab-item");
    expect(tabElement).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it("should call onClick", () => {
    const wrapper = shallow(<TabItem {...props} />);
    const tabElement = wrapper.find(".rdt-tab-item");
    tabElement.simulate("click");
    expect(onTabClickMock).toHaveBeenCalledTimes(1);
  });
  it("should call onClick when enter is pressed", () => {
    const wrapper = shallow(<TabItem {...props} />);
    const tabElement = wrapper.find(".rdt-tab-item");
    tabElement.simulate("keypress", { key: "Enter" });
    expect(onTabClickMock).toHaveBeenCalledTimes(1);
  });
  it("should call onClick when space is pressed", () => {
    const wrapper = shallow(<TabItem {...props} />);
    const tabElement = wrapper.find(".rdt-tab-item");
    tabElement.simulate("keypress", { key: " " });
    expect(onTabClickMock).toHaveBeenCalledTimes(1);
  });
  it("should add rdt-tab-item-selected class if active ", () => {
    const wrapper = shallow(<TabItem {...props} />);
    wrapper.setProps({ active: true });
    const activeElement = wrapper.find(".rdt-tab-item-selected");
    expect(activeElement).toHaveLength(1);
  });
});
