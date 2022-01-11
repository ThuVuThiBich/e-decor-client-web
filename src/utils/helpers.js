import { v4 as uuidv4 } from "uuid";

export const getAuth = () => {
  const auth = localStorage.getItem("auth");
  return typeof auth === "string" ? JSON.parse(auth) : {};
};

export const setAuth = (auth) => {
  localStorage.setItem("auth", JSON.stringify(auth.result));
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const setToken = (data) => {
  localStorage.setItem("token", data);
};

export const getPriceText = (products) => {
  const prices = products?.map((product) => product.price);
  if (prices?.length > 0) {
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    if (min === max) return min;
    else return `${min} - ${max}`;
  } else return "";
};
export const getImagesFromProductVersion = (products) => {
  const images = products?.map((product) => {
    return { id: uuidv4(), image: product.image };
  });
  return images;
};
