import type { ActionObject } from "./action.types";
import type { Theme, CampaignId } from "./theme.types";
import type { CampaignConfig } from "./campaign.types";


export const COMPONENT_TYPES = {
  BANNER_HERO: "BANNER_HERO",
  PRODUCT_GRID_2X2: "PRODUCT_GRID_2X2",
  DYNAMIC_COLLECTION: "DYNAMIC_COLLECTION",
  FULL_SCREEN_OVERLAY: "FULL_SCREEN_OVERLAY",
} as const;

export type ComponentType =
  (typeof COMPONENT_TYPES)[keyof typeof COMPONENT_TYPES];

export interface ProductRef {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  mrp?: number;
  badge?: string;
  rating?: number;
  inventory?: number;
  action?: ActionObject;
}

export interface BaseNode {
  id: string;
  type: ComponentType | string;
  metadata?: Record<string, unknown>;
}

export interface BannerHeroNode extends BaseNode {
  type: "BANNER_HERO";
  imageUrl: string;
  altText?: string;
  action?: ActionObject;
}

export interface ProductGrid2x2Node extends BaseNode {
  type: "PRODUCT_GRID_2X2";
  title?: string;
  items: ProductRef[];
  action?: ActionObject;
}

export interface DynamicCollectionNode extends BaseNode {
  type: "DYNAMIC_COLLECTION";
  title: string;
  subtitle?: string;
  items: ProductRef[];
  action?: ActionObject;
}

export interface FullScreenOverlayNode extends BaseNode {
  type: "FULL_SCREEN_OVERLAY";
  animation_url: string;
  format: "lottie" | "webp";
  cacheKey?: string;
}

export type KnownComponentNode =
  | BannerHeroNode
  | ProductGrid2x2Node
  | DynamicCollectionNode
  | FullScreenOverlayNode;

export interface UnknownNode extends BaseNode {
  type: string;
  [key: string]: unknown;
}

export type ComponentNode =
  | KnownComponentNode
  | UnknownNode;

export interface HomepagePayload {
  screenId: string;
  theme: Theme;
  activeCampaign?: CampaignId | null;
  campaign?: CampaignConfig;
  feed: ComponentNode[];
}

export function isKnownComponent(
  node: ComponentNode
): node is KnownComponentNode {
  return (
    node.type === COMPONENT_TYPES.BANNER_HERO ||
    node.type === COMPONENT_TYPES.PRODUCT_GRID_2X2 ||
    node.type === COMPONENT_TYPES.DYNAMIC_COLLECTION ||
    node.type === COMPONENT_TYPES.FULL_SCREEN_OVERLAY
  );
}

export function isOverlayNode(
  node: ComponentNode
): node is FullScreenOverlayNode {
  return (
    node.type === COMPONENT_TYPES.FULL_SCREEN_OVERLAY
  );
}