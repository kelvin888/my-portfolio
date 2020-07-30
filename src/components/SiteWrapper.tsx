import React, { FC, ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const SiteWrapper: FC = (props: Props) => {
  return <div className="site-wrapper">{props.children}</div>;
};

export default SiteWrapper;
