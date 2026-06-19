import type {
CampaignConfig,
} from "@/types/campaign.types";

export function resolveOverlay(
campaign: CampaignConfig | null
) {
return campaign?.overlay ?? null;
}
