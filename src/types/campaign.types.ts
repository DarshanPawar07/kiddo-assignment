import type { Theme, CampaignId } from "./theme.types";
import type { FullScreenOverlayNode } from "./schema.types";

export interface FeaturedCollectionConfig {
readonly id: string;

readonly title: string;

readonly description?: string;
}

export interface CampaignConfig {
readonly id: CampaignId;

readonly label: string;

readonly theme: Theme;

readonly overlay?: FullScreenOverlayNode;

readonly featuredCollection?: FeaturedCollectionConfig;

readonly isActive: boolean;
}

export interface CampaignContextValue {
activeCampaign: CampaignConfig | null;

setActiveCampaign: (
campaign: CampaignConfig | null
) => void;

clearCampaign: () => void;
}

export type CampaignRegistry = Record<
CampaignId,
CampaignConfig

> ;
