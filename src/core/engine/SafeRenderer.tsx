import type {
ComponentNode,
} from "@/types/schema.types";

import ErrorBoundary from "./ErrorBoundary";
import NodeRenderer from "./NodeRenderer";

interface Props {
node: ComponentNode;
}

export default function SafeRenderer({
node,
}: Props) {
return ( <ErrorBoundary> <NodeRenderer
     node={node}
   /> </ErrorBoundary>
);
}
