import React from "react";
import { categoriesProps } from "../../type";

import styless from "./Navbar.module.scss";

const Categories: React.FC<categoriesProps> = ({ activIndex, changeCategories }) => {
  const ctegories = [
    "Все",
    "Мясные",
    "Вегатерианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <ul className={styless.categories}>
      {ctegories.map((item, index) => (
        <span
          className={`${activIndex === index ? styless.active : ""} ${
            styless.item_li
          }`}
          onClick={() => changeCategories(index)}
          key={index}
        >
          {item}
        </span>
      ))}
    </ul>
  );
};

export default React.memo(Categories);
