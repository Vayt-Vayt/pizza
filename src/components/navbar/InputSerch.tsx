import React from "react";
import debounce from "lodash.debounce";

import serchSvg from "../../assets/icon/Search.svg";

import styless from "./Navbar.module.scss";

type inputProps = {
  setValue: Function;
};

export const InputSerch: React.FC<inputProps> = ({ setValue }) => {
  const [stateInput, setStateInput] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSerchInput = React.useCallback(
    debounce((event) => setValue(event), 500),
    []
  );

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateInput(event.target.value);
    updateSerchInput(event.target.value);
  };

  const clearInput = () => {
    setStateInput("");
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <div className={styless.input_container}>
      <h3>Поиск пиццы: </h3>
      <div className={styless.input_serch}>
        <img src={serchSvg} alt="serch-svg" />
        <input
          type="text"
          value={stateInput}
          onChange={changeInput}
          ref={inputRef}
        />
        {stateInput !== "" && <span onClick={clearInput}>&#10006;</span>}
      </div>
    </div>
  );
};

