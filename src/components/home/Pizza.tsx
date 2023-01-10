import React from "react";
import { ObjPizza } from "../../type";
import ButtonPush from "./ButtonPush";

import styless from "./Home.module.scss";

const Pizza: React.FC<ObjPizza> = (props) => {
  const { id, price, imageUrl, sizes, title, types, addStateBasket } = props;

  console.log("pizza render");

  const typePizza = ["тонкое", "традиционное"];
  const [pizzaType, setPizzaType] = React.useState(types[0]);
  const [sizeType, setSizeType] = React.useState(0);

  const sizesMap = sizes.map((item, i) => (
    <li
      className={sizeType === i ? styless.active : ""}
      onClick={() => setSizeType(i)}
      key={i}
    >
      {item} см.
    </li>
  ));

  const typesMap = types.map((i) => (
    <li
      className={pizzaType === i ? styless.active : ""}
      onClick={() => setPizzaType(i)}
      key={i}
    >
      {typePizza[i]}
    </li>
  ));

  return (
    <div className={styless.container}>
      <img src={imageUrl} alt="pizza" />
      <h3>{title}</h3>
      <div>
        <div className={styless.type_pizza}>
          <ul>{typesMap}</ul>
          <ul>{sizesMap}</ul>
        </div>
        <div className={styless.price_btn}>
          <h3>от {price} руб.</h3>
          <ButtonPush
            id={id}
            pushClick={() =>
              addStateBasket({
                id,
                imageUrl,
                title,
                types: typePizza[pizzaType],
                sizes: String(sizes[sizeType]),
                price,
                count: 1,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Pizza);
