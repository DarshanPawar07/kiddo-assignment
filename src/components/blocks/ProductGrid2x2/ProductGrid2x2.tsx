import { memo } from "react";
import {
View,
} from "react-native";

import type {
ProductGrid2x2Node,
} from "@/types/schema.types";

import ProductCard from "@/components/cards/ProductCard";
import ThemedText from "@/components/common/ThemedText";

import styles from "./ProductGrid2x2.styles";

interface Props {
node: ProductGrid2x2Node;
}

function ProductGrid2x2Component({
node,
}: Props) {
return ( <View style={styles.container}>
{node.title ? ( <ThemedText style={styles.title}>
{node.title} </ThemedText>
) : null}


  <View style={styles.grid}>
    {node.items.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))}
  </View>
</View>


);
}

export default memo(
ProductGrid2x2Component
);
