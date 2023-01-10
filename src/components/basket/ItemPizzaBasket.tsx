import React from "react";

import { ItemPizzaBasketProps } from "../../type";

import styless from "./Basket.module.scss";

const ItemPizzaBasket: React.FC<ItemPizzaBasketProps> = ({
  imageUrl,
  title,
  types,
  sizes,
  id,
  count,
  price,
  removeBasketItem,
  addBasketItem,
}) => {
  return (
    <>
      <li>
        <div className={styless.name_pizza}>
          <img src={imageUrl} alt="icon pizza" />
          <div>
            <h4>{title}</h4>
            <p>
              {types} {sizes}см
            </p>
          </div>
        </div>
        <div className={styless.functional}>
          <div className={styless.btn}>
            <span
              onClick={() => removeBasketItem(Number(id), types, sizes, "item")}
            >
              &mdash;
            </span>
            <h4>{count}</h4>
            <span onClick={() => addBasketItem(Number(id), types, sizes)}>
              &#10010;
            </span>
          </div>
          <h4>{price * count} руб.</h4>
          <button
            onClick={() => removeBasketItem(Number(id), types, sizes, "id")}
          >
            &#10006;
          </button>
        </div>
      </li>
    </>
  );
};

export default ItemPizzaBasket;
