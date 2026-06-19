

export interface Theme {
primary: string;

background: string;

secondary: string;

text: string;

card: string;

border: string;

success?: string;

warning?: string;

borderRadius?: number;
}


export const CAMPAIGN_IDS = {
BACK_TO_SCHOOL: "BACK_TO_SCHOOL",
SUMMER_PLAYHOUSE: "SUMMER_PLAYHOUSE",
MYSTERY_GIFT_CARNIVAL: "MYSTERY_GIFT_CARNIVAL",
} as const;

export type CampaignId =
(typeof CAMPAIGN_IDS)[keyof typeof CAMPAIGN_IDS];
