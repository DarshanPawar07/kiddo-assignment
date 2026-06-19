import {
ComponentNode,
HomepagePayload,
} from "@/types/schema.types";

export function isValidPayload(
payload: unknown
): payload is HomepagePayload {
if (!payload) {
return false;
}

if (typeof payload !== "object") {
return false;
}

const candidate =
payload as HomepagePayload;

return (
typeof candidate.screenId ===
"string" &&
Array.isArray(candidate.feed)
);
}

export function safeFeed(
payload: HomepagePayload
): ComponentNode[] {
return payload.feed.filter(
(node) =>
node &&
typeof node.id === "string" &&
typeof node.type === "string"
);
}
