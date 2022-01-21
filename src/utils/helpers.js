import { v4 as uuidv4 } from "uuid";

export const getAuth = () => {
  const auth = localStorage.getItem("auth");
  return typeof auth === "string" ? JSON.parse(auth) : {};
};

export const setAuth = (auth) => {
  localStorage.setItem("auth", JSON.stringify(auth));
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

export const getCategoryNameFromId = (id, categories) => {
  const category = categories?.find((item) => +item.categoryId === +id);
  return category?.category?.name;
};

export const getPrice = (min, max) => {
  if (min === max) return min;
  else return `${min} - ${max}`;
};

function createData(name, version, price, carbs, total) {
  return { name, version, price, carbs, total };
}

const rows = [
  createData("Cupcake", "blue", 3.5, 67, 4.3),
  createData("Donut", "red", 25.0, 51, 4.9),
  createData("Eclair", "blue", 16.0, 24, 6.0),
  createData("Frozen yoghurt", "fruit", 6.0, 24, 4.0),
  createData("Gingerbread", "blue", 16.0, 49, 3.9),
];

export const getCartItemsShop = (products) => {
  let array = [];
  for (let i = 0; i < products.length; i++) {
    let arr = { name: "", version: {} };
    arr.name = products[i].name;
    for (let j = 0; j < products[i].productVersions.length; j++) {
      arr.version = products[i].productVersions[j];
      array.push(arr)
    }
  }
  return array;
};
