import { FC, useState, useRef } from "react";

import "./tabView.scss";
import TabItem from "./TabItem";

const TabView: FC<TabsViewProps> = (props) => {
  const { tabs, children, styles } = props;
  const [currentTab, setCurrentTab] = useState<number>(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  const handleClick = (current: number) => {
    bodyRef?.current?.focus();
    setCurrentTab(current);
  };

  return (
    <div style={styles?.tabView} className="rdt-tabs">
      <div style={styles?.tabViewHeader} className="rdt-tabs-header">
        {tabs?.map((tab, index) => (
          <TabItem
            key={`Tab ${index + 1}`}
            onClick={() => handleClick(index)}
            {...tab}
            active={index === currentTab}
            styles={styles?.tabItem}
          />
        ))}
      </div>
      <div
        role="presentation"
        ref={bodyRef}
        tabIndex={0}
        className="rdt-tabs-content"
      >
        {children[currentTab]}
      </div>
    </div>
  );
};

export default TabView;
