import React from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { SkeletonPizza } from "../../page/skeleton_pizza/SkeletonPizza";
import { addBasket } from "../../redux/slices/basketSlice";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import Pizza from "./Pizza";
import { basket, propsContentHome } from "../../type";



const ContentHome: React.FC<propsContentHome> = ({ serchState }) => {
  const dispatch = useAppDispatch();
  const { pizzaState, loader } = useAppSelector((state) => state.pizzaSlice);

  const addStateBasket = React.useCallback((obj: basket) => dispatch(addBasket(obj)), [dispatch]);

  const pizzaFilter =
    serchState.trim() !== ""
      ? pizzaState.filter((obj) =>
          obj.title.toLowerCase().includes(serchState.toLowerCase())
        )
      : pizzaState;

  return (
    <>
      {loader === "loading" ? (
        [1, 2, 3].map((i) => <SkeletonPizza key={i} />)
      ) : loader === "error" ? (
        <ErrorComponent />
      ) : (
        pizzaFilter.map((obj) => (
          <Pizza key={obj.id} {...obj} addStateBasket={addStateBasket} />
        ))
      )}
    </>
  );
};

export default React.memo(ContentHome);
