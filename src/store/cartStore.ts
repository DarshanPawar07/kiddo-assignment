import { create } from "zustand";

import type {
CartState,
CartItem,
} from "@/types/product.types";

export const useCartStore = create<CartState>((set, get) => ({
items: {},

addToCart: (productId, qty = 1) =>
set((state) => {
const existingItem = state.items[productId];


  const updatedItem: CartItem = {
    productId,
    qty: existingItem
      ? existingItem.qty + qty
      : qty,
  };

  return {
    items: {
      ...state.items,
      [productId]: updatedItem,
    },
  };
}),


removeFromCart: (productId) =>
set((state) => {
const nextItems = { ...state.items };


  delete nextItems[productId];

  return {
    items: nextItems,
  };
}),


clearCart: () =>
set({
items: {},
}),

getQty: (productId) => {
return get().items[productId]?.qty ?? 0;
},

totalItems: () => {
return Object.values(get().items).reduce(
(total, item) => total + item.qty,
0
);
},
}));
