import React from "react";

import BannerHero from "@/components/blocks/BannerHero/BannerHero";
import ProductGrid2x2 from "@/components/blocks/ProductGrid2x2/ProductGrid2x2";
import DynamicCollection from "@/components/blocks/DynamicCollection/DynamicCollection";
import FullScreenOverlay from "@/components/overlays/FullScreenOverlay";

import UnknownComponent from "./unknownComponent";

export const componentRegistry: Record<
  string,
  React.ComponentType<any>
> = {
  BANNER_HERO: BannerHero,
  PRODUCT_GRID_2X2: ProductGrid2x2,
  DYNAMIC_COLLECTION: DynamicCollection,
  FULL_SCREEN_OVERLAY: FullScreenOverlay,
};

export function getComponent(
  type: string
) {
  return (
    componentRegistry[type] ??
    UnknownComponent
  );
}