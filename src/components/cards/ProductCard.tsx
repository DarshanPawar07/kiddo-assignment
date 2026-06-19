import { memo } from "react";
import { View } from "react-native";

import type { ProductRef } from "@/types/schema.types";

import CachedImage from "@/components/common/CachedImage";
import ThemedText from "@/components/common/ThemedText";

import ProductPrice from "./ProductPrice";
import AddToCartButton from "./AddToCartButton";

import styles from "./ProductCard.styles";

interface ProductCardProps {
  product: ProductRef;
}

function ProductCardComponent({
  product,
}: ProductCardProps) {
  return (
    <View style={styles.container}>
      <CachedImage
        uri={product.imageUrl}
        style={styles.image}
      />

      <ThemedText
        numberOfLines={2}
        style={styles.title}
      >
        {product.title}
      </ThemedText>

      <ProductPrice
        price={product.price}
        mrp={product.mrp}
      />

      <AddToCartButton
        productId={product.id}
      />
    </View>
  );
}

export default memo(
  ProductCardComponent
);