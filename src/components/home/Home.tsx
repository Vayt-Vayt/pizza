import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import qs from "qs";

import NavBar from "../navbar/NavBar";
import { fetchPizzaStatus } from "../../redux/slices/pizzaSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import {
  changeActiveIndex,
  changeSerch,
  setFilter,
} from "../../redux/slices/filterSlice";

import styless from "./Home.module.scss";
import ContentHome from "./ContentHome";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSerch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { filter } = useAppSelector((state) => state);
  const { activIndex, indexSelect, selectVisibility, serchState } = filter;

  const changeCategories = React.useCallback(
    (id: number) => dispatch(changeActiveIndex(id)),
    [dispatch]
  );

  const setSerchInput = React.useCallback(
    (e: ChangeEvent) => dispatch(changeSerch(e)),
    [dispatch]
  );

  const feetchPizza = () =>
    dispatch(fetchPizzaStatus({ indexSelect, activIndex }));

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setFilter(params));
      isSerch.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: indexSelect.sort,
        order: indexSelect.order,
        index: indexSelect.id,
        categoryId: activIndex,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSerch.current) {
      feetchPizza();
    }

    isSerch.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexSelect, activIndex]);

  console.log("render");

  return (
    <div className={styless.wraper}>
      <NavBar
        indexSelect={indexSelect.id}
        selectVisibility={selectVisibility}
        activIndex={activIndex}
        changeCategories={changeCategories}
        setSerchInput={setSerchInput}
      />
      <h2>Все пиццы:</h2>
      <div className={styless.pizzas}>
        <ContentHome serchState={serchState} />
      </div>
    </div>
  );
};

export default Home;
