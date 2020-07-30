import React, { ReactNode, FC } from "react";
interface Props {
  children: ReactNode;
}

const MainContentArea: FC = (props: Props) => {
  return <main className="content float-right">{props.children}</main>;
};

export default MainContentArea;
