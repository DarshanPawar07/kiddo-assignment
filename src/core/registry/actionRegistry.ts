import {
ACTION_TYPES,
ActionRegistry,
} from "@/types/action.types";

import { addToCart } from "@/core/dispatcher/handlers/addToCart";
import { deepLink } from "@/core/dispatcher/handlers/deepLink";
import { applyMysteryGiftCoupon } from "@/core/dispatcher/handlers/applyMysteryGiftCoupon";

export const actionRegistry: ActionRegistry = {
[ACTION_TYPES.ADD_TO_CART]: async (payload) => {
await addToCart(payload.id, payload.qty);
},

[ACTION_TYPES.DEEP_LINK]: async (payload) => {
await deepLink(payload.url);
},

[ACTION_TYPES.APPLY_MYSTERY_GIFT_COUPON]: async (
payload
) => {
await applyMysteryGiftCoupon(
payload.couponCode
);
},

[ACTION_TYPES.OPEN_PRODUCT]: async () => {},

[ACTION_TYPES.BOOK_EVENT_TICKET]: async () => {},
};
