import React from "react";
import { useAppSelector } from "../../hooks/hooksRedux";
import { selectBasketId } from "../../redux/slices/basketSlice";

import styless from "./Home.module.scss";

type propsButtonPush = {
  pushClick: any;
  id: number;
};

const ButtonPush: React.FC<propsButtonPush> = ({ pushClick, id }) => {
  const countBascet = useAppSelector(selectBasketId(id));

  return (
    <>
      <button onClick={pushClick}>
        &#10010; Добавить
        {countBascet !== 0 && (
          <span className={styless.amount_orders}>{countBascet}</span>
        )}
      </button>
    </>
  );
};

export default React.memo(ButtonPush);
