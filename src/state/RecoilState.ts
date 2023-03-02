import { atom, selector } from "recoil";
import { CartProduct, Product } from "../types";

export const AllProducts = atom<Product[]>({
  key: "allProducts",
  default: [
  ],
});

export const cartItems = atom<CartProduct[]>({
  key: "cartItems",
  default: [
  ],
});

export const cartTotal = selector({
  key: "cartValue",
  get: ({ get }) => {
    const cart = get(cartItems);
    var totalAmount = 0;
    cart.forEach((item) => {
      totalAmount = totalAmount + item.price * item.count;
    });

    return totalAmount;
  },
});

export const totalItemsInCart = selector({
  key: "totalItems",
  get: ({ get }) => {
    const cart = get(cartItems);
    var totalItems = 0;
    cart.forEach((item) => {
      totalItems = totalItems + item.count;
    });

    return totalItems;
  },
});
