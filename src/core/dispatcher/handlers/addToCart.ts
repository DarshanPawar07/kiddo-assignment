import { useCartStore } from "@/store/cartStore";

export async function addToCart(
productId: string,
qty: number = 1
): Promise<void> {
useCartStore
.getState()
.addToCart(productId, qty);
}
