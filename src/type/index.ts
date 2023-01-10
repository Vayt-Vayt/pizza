export type Pizzaz = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}


export interface ObjPizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number; 
  addStateBasket:  (obj: basket) => void;
  // countBascet: (id: number) => number;
}

export type categoriesProps = {
  activIndex: number;
  changeCategories: (i: number) => void;
};

export type navBarProps = {
  selectVisibility: boolean;
  indexSelect: number;
  // vhangeVisibilitySelect: (e: boolean | null) => void;
  // changeIndexSelect: (i: number) => void;
  activIndex: number;
  changeCategories: (i: number) => void;
  // selectValue: string[];
  setSerchInput: any;
};


export type initialStatePizzas = {
pizzaState: Pizzaz[],
  loader: string,
  error: null | string,
}

export type initialStateFilter = {
  indexSelect: {
    id: number;
    sort: string;
    order: string;
  };
  activIndex: number;
  selectVisibility: boolean;
  selectValue: string[];
  serchState: string;
  page: number;
  maxCount: null | number;
};
export type basket = {
  id: number;
  types: string;
  sizes: string;
  title: string;
  imageUrl: string;
  price: number;
  count: number;
};

export type basketRemove = {
  id: number;
  types: string;
  sizes: string;
  type: string;
};

export type initialSateBasket = {
  basket: basket[];
  totalPrice: number;
  totalCount: number;
};

export type ItemPizzaBasketProps = {
  imageUrl: string;
  title: string;
  types: string;
  sizes: string;
  id: number;
  count: number;
  price: number;
  removeBasketItem: Function;
  addBasketItem: Function;
};

export type getItemsPizza = {
  indexSelect: {
    id: number;
    sort: string;
    order: string;
  };
  activIndex: number;
}

export type propsContentHome = {
  serchState: string;
};