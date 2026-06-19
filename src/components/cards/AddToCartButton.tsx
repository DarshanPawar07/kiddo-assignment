import React, { memo } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
} from "react-native";

import { useCartStore } from "@/store/cartStore";

interface AddToCartButtonProps {
  productId: string;
}

function AddToCartButtonComponent({
  productId,
}: AddToCartButtonProps) {
  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const qty = useCartStore(
    (state) => state.items[productId]?.qty ?? 0
  );

  const onPress = () => {
    addToCart(productId);
  };

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        qty > 0 && styles.addedButton,
      ]}
    >
      <Text style={styles.text}>
        {qty > 0
          ? `Added (${qty})`
          : "Add"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 42,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF8A00",
  },

  addedButton: {
    backgroundColor: "#22C55E",
  },

  text: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
});

const AddToCartButton = memo(
  AddToCartButtonComponent
);

export default AddToCartButton;