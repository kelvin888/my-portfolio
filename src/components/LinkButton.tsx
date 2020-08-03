import React, { ReactNode } from "react";
interface Props {
  className?: string;
  children: ReactNode;
  href?: string;
  download?: boolean;
  onClick?: Function;
}

const LinkButton = (props: Props) => {
  let { className, children, href, download, onClick } = props;
  console.log("what is onClick? ", onClick);

  return (
    <a
      href={!onClick ? href : null}
      className={className}
      download={download}
      aria-label="link Button"
      onClick={() => (onClick ? onClick() : void 0)}
    >
      {children}
    </a>
  );
};
LinkButton.defaultProps = {
  className: "btn btn-border-light btn-lg",
  href: "#",
  download: false,
};
export default LinkButton;
