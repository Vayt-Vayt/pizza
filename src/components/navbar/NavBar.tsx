import React from "react";

import Categories from "./Categories";
import { navBarProps } from "../../type";
import { InputSerch } from "./InputSerch";

import Sorts from "./Sorts";
import styless from "./Navbar.module.scss";

const NavBar: React.FC<navBarProps> = ({
  activIndex,
  changeCategories,
  setSerchInput,
}) => {

  return (
    <nav className={styless.navbar}>
      <div className={styless.serch_sort}>
        <InputSerch setValue={setSerchInput} />
        <Sorts 
        />
      </div>
      <Categories activIndex={activIndex} changeCategories={changeCategories} />
    </nav>
  );
};

export default React.memo(NavBar);
