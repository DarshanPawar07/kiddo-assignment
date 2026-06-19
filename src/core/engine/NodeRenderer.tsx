import { memo } from "react";

import type {
  ComponentNode,
} from "@/types/schema.types";

import { getComponent } from "@/core/registry/componentRegistry";

interface Props {
  node: ComponentNode;
}

function NodeRendererComponent({
  node,
}: Props) {
  const Component = getComponent(
    node.type
  );

  return (
    <Component
      node={node}
    />
  );
}

export default memo(
  NodeRendererComponent
);