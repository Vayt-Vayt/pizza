import React from "react";

import logo from "../../assets/icon/logo.svg";
import bascet from "../../assets/icon/bascet.svg";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooksRedux";
import { selectBasket } from "../../redux/slices/basketSlice";

import styless from "./Header.module.scss";

const Header: React.FC = () => {
  const isMount = React.useRef(false)

  const { totalPrice, totalCount, basket } = useAppSelector(selectBasket);

  React.useEffect(() => {
    if (isMount.current) {
      const json = JSON.stringify(basket)
      window.localStorage.setItem("_bascet",json)
    }

    isMount.current = true

  }, [basket])

  return (
    <header className={styless.header}>
      <Link to="/">
        <div className={styless.logotype}>
          <img src={logo} alt="logo-type pizza" />
          <div>
            <h2>REACT PIZZA</h2>
            <p>самая вкуснейшая пицца здесь</p>
          </div>
        </div>
      </Link>
      <Link to="/basket">
        <div className={styless.bascet_info}>
          <img src={bascet} alt="bascet" />
          <p>{totalPrice} руб.</p>
          <p>{totalCount} шт.</p>
        </div>
      </Link>
    </header>
  );
};

export default Header;
