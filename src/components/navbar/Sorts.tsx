import React from "react";

import selectSvg from "../../assets/icon/selectbtn.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import {
  changeIndexSelect,
  changeSelectVisibilyti,
} from "../../redux/slices/filterSlice";

import styless from "./Navbar.module.scss";

const Sorts: React.FC = () => {
  const dispatch = useAppDispatch();
  const sortRef = React.useRef(null);
  const { filter } = useAppSelector((state) => state);
  const { indexSelect, selectVisibility, selectValue } = filter;

  const vhangeVisibilitySelect = React.useCallback(
    (e: boolean | null) => dispatch(changeSelectVisibilyti(e)),
    [dispatch]
  );

   const changeSelect = (i: number) => {
    dispatch(changeIndexSelect(i));
    dispatch(changeSelectVisibilyti(false));
  };

  const classSelectActive = `${styless.select_item} ${
    selectVisibility ? styless.active : ""
  }`;

  const selectMap = selectValue.map((item, i) => (
    <li onClick={() => changeSelect(i)} key={i}>
      {item}
    </li>
  ));

  React.useEffect(() => {
    const handlerClick = (event: MouseEvent) => {
      const _event = event as MouseEvent & {
        composedPath: Node[];
      };
      if (sortRef.current && !_event.composedPath().includes(sortRef.current)) {
        vhangeVisibilitySelect(false);
      }
    };
    document.body.addEventListener("click", handlerClick);
    return () => document.body.removeEventListener("click", handlerClick);
  }, [vhangeVisibilitySelect]);

  return (
    <div ref={sortRef}>
      <div className={styless.select}>
        <img src={selectSvg} alt="selectSvg" />
        <div className={styless.textValue}>
          <h4>Сортироовать по: </h4>
          <p onClick={() => vhangeVisibilitySelect(null)}>
            {selectValue[indexSelect.id]}
          </p>
        </div>
      </div>
      <ul className={classSelectActive}>{selectMap}</ul>
    </div>
  );
};

export default Sorts;
