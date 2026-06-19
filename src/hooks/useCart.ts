import { useCartStore } from "@/store/cartStore";

export function useCartItem(productId: string) {
return useCartStore(
(state) => state.items[productId]?.qty ?? 0
);
}

export function useCartCount() {
return useCartStore((state) =>
Object.values(state.items).reduce(
(total, item) => total + item.qty,
0
)
);
}

export function useIsInCart(productId: string) {
return useCartStore(
(state) => Boolean(state.items[productId])
);
}
