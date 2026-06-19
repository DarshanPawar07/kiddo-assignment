import { useEffect } from "react";

import { FlashList } from "@shopify/flash-list";

import payload from "@/mocks/homepage.payload.json";

import type {
  ComponentNode,
} from "@/types/schema.types";

import { useTheme } from "@/core/theme/useTheme";

import {
  isValidPayload,
  safeFeed,
} from "@/utils/safeParser";

import { keyExtractor } from "@/utils/keyExtractor";

import Loader from "@/components/common/Loader";

import SafeRenderer from "./SafeRenderer";

export default function HomeFeedEngine() {
  const { setTheme } = useTheme();

  useEffect(() => {
    if (isValidPayload(payload)) {
      setTheme(payload.theme);
    }
  }, [setTheme]);

  if (!isValidPayload(payload)) {
    return <Loader />;
  }

  const feed = safeFeed(payload);

  return (
    <FlashList<ComponentNode>
      data={feed}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => (
        <SafeRenderer node={item} />
      )}
    />
  );
}