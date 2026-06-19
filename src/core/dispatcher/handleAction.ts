import type {
ActionObject,
ActionType,
} from "@/types/action.types";

import { actionRegistry } from "@/core/registry/actionRegistry";

export async function handleAction(
action?: ActionObject
): Promise<void> {
if (!action) {
return;
}

const handler = actionRegistry[
action.type as ActionType
];

if (!handler) {
console.warn(
`Unsupported action type: ${action.type}`
);
return;
}

await handler(action.payload as never);
}
