import React from "react";
import { Route, Routes } from "react-router-dom";

import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { NotFound } from "./page/notFound/NotFound";

import "./index.scss";

const App: React.FC = () =>  {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
