export const ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  DEEP_LINK: "DEEP_LINK",
  APPLY_MYSTERY_GIFT_COUPON:
    "APPLY_MYSTERY_GIFT_COUPON",
  OPEN_PRODUCT: "OPEN_PRODUCT",
  BOOK_EVENT_TICKET:
    "BOOK_EVENT_TICKET",
} as const;

export type ActionType =
  (typeof ACTION_TYPES)[keyof typeof ACTION_TYPES];

export interface ActionMeta {
  trackingId?: string;
  source?: string;
}

export interface AddToCartPayload {
  readonly id: string;
  readonly qty?: number;
}

export interface DeepLinkPayload {
  readonly url: string;
}

export interface ApplyMysteryGiftCouponPayload {
  readonly couponCode: string;
  readonly productId?: string;
}

export interface OpenProductPayload {
  readonly id: string;
}

export interface BookEventTicketPayload {
  readonly eventId: string;
  readonly slot?: string;
}

export interface ActionPayloadMap {
  ADD_TO_CART: AddToCartPayload;

  DEEP_LINK: DeepLinkPayload;

  APPLY_MYSTERY_GIFT_COUPON:
    ApplyMysteryGiftCouponPayload;

  OPEN_PRODUCT: OpenProductPayload;

  BOOK_EVENT_TICKET:
    BookEventTicketPayload;
}

export type ActionObject<
  T extends ActionType = ActionType
> = {
  type: T;

  payload: ActionPayloadMap[T];

  meta?: ActionMeta;
};

export interface RawAction {
  type: string;

  payload?: unknown;

  meta?: Record<string, unknown>;
}

export type ActionHandler<
  T extends ActionType = ActionType
> = (
  payload: ActionPayloadMap[T]
) => void | Promise<void>;

export type ActionRegistry = {
  [K in ActionType]: ActionHandler<K>;
};

export function isKnownActionType(
  type: string
): type is ActionType {
  return Object.values(
    ACTION_TYPES
  ).includes(type as ActionType);
}