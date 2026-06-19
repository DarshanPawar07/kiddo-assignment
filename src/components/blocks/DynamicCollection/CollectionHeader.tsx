import { Pressable, View } from "react-native";

import type { ActionObject } from "@/types/action.types";

import { handleAction } from "@/core/dispatcher/handleAction";

import ThemedText from "@/components/common/ThemedText";

import styles from "./DynamicCollection.styles";

interface Props {
  title: string;
  subtitle?: string;
  action?: ActionObject;
}

export default function CollectionHeader({
  title,
  subtitle,
  action,
}: Props) {
  const onPress = () => {
    if (action) {
      handleAction(action);
    }
  };

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <ThemedText style={styles.title}>
          {title}
        </ThemedText>

        {subtitle ? (
          <ThemedText style={styles.subtitle}>
            {subtitle}
          </ThemedText>
        ) : null}
      </View>
    </Pressable>
  );
}