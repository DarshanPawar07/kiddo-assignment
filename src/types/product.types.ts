

export interface Product {
readonly id: string;

readonly title: string;

readonly imageUrl: string;

readonly price: number;

readonly mrp?: number;

readonly badge?: string;

readonly category?: string;

readonly rating?: number;

readonly inventory?: number;

readonly inStock?: boolean;

readonly cacheKey?: string;
}

export interface CartItem {
readonly productId: string;

readonly qty: number;
}



export interface CartState {
items: Record<string, CartItem>;

addToCart: (
productId: string,
qty?: number
) => void;

removeFromCart: (
productId: string
) => void;

clearCart: () => void;

getQty: (
productId: string
) => number;

totalItems: () => number;
}
