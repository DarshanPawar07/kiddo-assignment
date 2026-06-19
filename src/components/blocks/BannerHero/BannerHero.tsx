import { memo } from "react";
import { Pressable } from "react-native";

import type { BannerHeroNode } from "@/types/schema.types";

import CachedImage from "@/components/common/CachedImage";

import { handleAction } from "@/core/dispatcher/handleAction";

import styles from "./BannerHero.styles";

interface Props {
  node: BannerHeroNode;
}

function BannerHeroComponent({
  node,
}: Props) {
  const onPress = () => {
    if (node.action) {
      handleAction(node.action);
    }
  };

  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
    >
      <CachedImage
        uri={node.imageUrl}
        style={styles.image}
      />
    </Pressable>
  );
}

export default memo(
  BannerHeroComponent
);