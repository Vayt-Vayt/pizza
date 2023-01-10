import axios from "axios";

const instance = axios.create({
  baseURL: `https://639200beb750c8d178d415bd.mockapi.io/`,
});

export const pizzaParams = {
  getItems: async (
    { order, sort }: { sort: string; order: string },
    searchIndex: number
  ) => {
    const search = searchIndex !== 0 ? `&category=${searchIndex}` : "";
    const { data } = await instance.get(
      `items?sortBy=${sort}&order=${order}${search}`
    );

    return data;
  },
};
