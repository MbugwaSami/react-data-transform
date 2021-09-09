import { FC } from "react";

import "./tabView.scss";

const TabItem: FC<TabItemProps> = (props) => {
  const { title, onClick, active, styles, icon } = props;

  return (
    <div
      style={styles}
      aria-label={title}
      tabIndex={0}
      role="presentation"
      className={active ? "rdt-tab-item-selected rdt-tab-item" : "rdt-tab-item"}
      onClick={onClick}
      onKeyPress={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
    >
      <div className="rdt-tab-item-icon">{icon && icon}</div>
      <h4>{title}</h4>
    </div>
  );
};

export default TabItem;
