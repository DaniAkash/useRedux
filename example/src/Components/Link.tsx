import React, { ReactNode } from "react";

export interface LinkProps {
  active: boolean;
  children: ReactNode;
  onClick: () => unknown;
}

const Link = ({ active, children, onClick }: LinkProps) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: "4px"
    }}
  >
    {children}
  </button>
);

export default Link;
