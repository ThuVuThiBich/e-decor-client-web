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

export const getCartItemsShop = (products) => {
  let array = [];
  for (let i = 0; i < products?.length; i++) {
    for (let j = 0; j < products[i]?.productVersions?.length; j++) {
      array.push({
        name: products[i]?.name,
        version: products[i]?.productVersions[j],
        cartItemId: products[i]?.productVersions[j]?.cartItems?.[0]?.id,
      });
    }
  }
  return array;
};

export const getOrderPrice = (data, selectItems) => {
  let price = 0;
  for (let index = 0; index < data?.length; index++) {
    const element = data?.[index]?.version?.id;
    if (selectItems?.includes(element))
      price +=
        data?.[index]?.version?.price * data?.[index]?.version?.cartItems?.[0]?.quantity;
  }
  return price;
};
