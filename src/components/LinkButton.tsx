import React, { ReactNode } from "react";
interface Props {
  className?: string;
  children: ReactNode;
  href?: string;
}

const LinkButton = (props: Props) => {
  let { className, children, href } = props;
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};
LinkButton.defaultProps = {
  className: "btn btn-border-light btn-lg",
  href: "#",
};
export default LinkButton;
