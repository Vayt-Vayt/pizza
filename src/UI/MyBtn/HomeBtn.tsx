import React from "react";
import { Link } from "react-router-dom";

import styless from "./HomeBtn.module.scss";

type HomeBtnProps = {
  children: React.ReactNode;
  to: string;
  props?: React.PropsWithChildren;
}

export const HomeBtn: React.FC<HomeBtnProps> = ({ children, to, ...props }) => {
  return (
    <Link to={to}>
      <div className={styless.btn} {...props}>
        {children}
      </div>
    </Link>
  );
};
