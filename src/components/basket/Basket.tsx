import React from "react";

import Info from "./Info";
import basketSvg from "../../assets/icon/bascet.svg";
import trashSvg from "../../assets/icon/trash.svg";
import { HomeBtn } from "../../UI/MyBtn/HomeBtn";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { basket } from "../../type";
import {
  addBasket,
  removeBasket,
  removeItem,
  selectBasket,
} from "../../redux/slices/basketSlice";
import ItemPizzaBasket from "./ItemPizzaBasket";

import stylesBtn from "../../UI/MyBtn/HomeBtn.module.scss";
import styless from "./Basket.module.scss";

const Basket: React.FC = () => {

  const dispatch = useAppDispatch();
  const { basket, totalPrice, totalCount } = useAppSelector(selectBasket);

  const deleteBasket = () => dispatch(removeBasket());
  const addBasketItem = (id: number, types: string, sizes: string) => {
    dispatch(addBasket({ id, sizes, types }));
  };
  const removeBasketItem = (
    id: number,
    types: string,
    sizes: string,
    type: string
  ) => {
    dispatch(removeItem({ id, sizes, types, type }));
  };


  
  if (basket.length === 0) return <Info />;


  return (
    <div>
      <div className={styless.basket_container}>
        <div className={styless.title}>
          <div className={styless.text}>
            <img src={basketSvg} alt="basketSvg" />
            <h2>Корзина</h2>
          </div>
          <p onClick={deleteBasket}>
            <img src={trashSvg} alt="trash" /> Очистить корзину
          </p>
        </div>
        <div className={styless.content}>
          <ul className={styless.pizza_container}>
            {basket.map((item: basket, i: number) => (
              <ItemPizzaBasket
                key={i}
                {...item}
                addBasketItem={addBasketItem}
                removeBasketItem={removeBasketItem}
              />
            ))}
          </ul>
        </div>
        <div className={styless.footer}>
          <div>
            <p>
              Всего пицц: <span>{totalCount}</span> шт.
            </p>
            <p>
              Сумма заказа: <span>{totalPrice}</span> руб.
            </p>
          </div>
          <div>
            <HomeBtn to="/">Вернуться назад</HomeBtn>
            <button className={stylesBtn.btn}>Оплатить сейчас</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
