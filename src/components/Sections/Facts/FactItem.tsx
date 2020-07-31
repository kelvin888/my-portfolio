import React, { ReactNode } from "react";
interface Props {
  count?: number;
  name?: string;
  icon?: ReactNode;
}
const FactItem = (props: Props) => {
  let { count, name, icon } = props;
  return (
    <div className="fact-item text-center">
      {icon}
      <h2 className="count">{count}</h2>
      <span>{name}</span>
    </div>
  );
};
FactItem.defaultProps = {
  count: 0,
  name: "",
  icon: <i className="icon-like icon-circle"></i>,
};
export default FactItem;
