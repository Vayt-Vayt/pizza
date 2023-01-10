import React from "react";

import basketIcon from "../../assets/icon/basketfalse.svg";
import { HomeBtn } from "../../UI/MyBtn/HomeBtn";

import styless from "./Basket.module.scss";

const Info: React.FC = () => {
  return (
    <div className={styless.info}>
      <h2>Корзина пустая <span>&#129402;</span></h2>
      <div>
        <p>Вероятно вы еще не определились с выбором пиццы</p>
        <p>Для того чтобы добавить пиццу перейдите на главную страницу</p>
      </div>
      <img src={basketIcon} alt="basket-icon" />
      <HomeBtn to="/">Вернуться на главную</HomeBtn>
    </div>
  );
};

export default Info;
