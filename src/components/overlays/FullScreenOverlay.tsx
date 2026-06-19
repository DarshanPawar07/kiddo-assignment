import { memo } from "react";
import {
  StyleSheet,
  View,
} from "react-native";

import LottieView from "lottie-react-native";

import type {
  FullScreenOverlayNode,
} from "@/types/schema.types";

interface FullScreenOverlayProps {
  node: FullScreenOverlayNode;
}

function FullScreenOverlayComponent({
  node,
}: FullScreenOverlayProps) {
  if (
    node.format !== "lottie"
  ) {
    return null;
  }

  return (
    <View
      pointerEvents="none"
      style={styles.container}
    >
      <LottieView
        source={{
          uri: node.animation_url,
        }}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
}

export default memo(
  FullScreenOverlayComponent
);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999,
  },

  animation: {
    flex: 1,
  },
});