import { memo } from "react";

import { FlashList } from "@shopify/flash-list";

import type {
  DynamicCollectionNode,
  ProductRef,
} from "@/types/schema.types";

import ProductCard from "@/components/cards/ProductCard";

import CollectionHeader from "./CollectionHeader";
import styles from "./DynamicCollection.styles";

interface Props {
  node: DynamicCollectionNode;
}

function DynamicCollectionComponent({
  node,
}: Props) {
  return (
    <>
      <CollectionHeader
        title={node.title}
        subtitle={node.subtitle}
        action={node.action}
      />

      <FlashList<ProductRef>
        horizontal
        data={[...node.items]}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
      />
    </>
  );
}

export default memo(
  DynamicCollectionComponent
);