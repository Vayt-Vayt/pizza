import React from "react";
import { HomeBtn } from "../../UI/MyBtn/HomeBtn";

export const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: "center", paddingBottom: "50px" }}>
      <div style={{ fontSize: "90px" }}>&#128533;</div>
      <h2>Ничего не найдено</h2>
      <p>Такой страницы не существует в нашем интернет магазине</p>
      <HomeBtn to="/">Вернуться на главную</HomeBtn>
    </div>
  );
};
