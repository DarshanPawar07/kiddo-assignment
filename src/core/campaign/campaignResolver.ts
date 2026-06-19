import type {
CampaignConfig,
CampaignRegistry,
} from "@/types/campaign.types";

import {
CAMPAIGN_IDS,
} from "@/types/theme.types";

export const campaignRegistry: CampaignRegistry =
{
[CAMPAIGN_IDS.BACK_TO_SCHOOL]: {
id: CAMPAIGN_IDS.BACK_TO_SCHOOL,
label: "Back To School",
theme: {
primary: "#2563EB",
background: "#FEF08A",
secondary: "#60A5FA",
text: "#111827",
card: "#FFFFFF",
border: "#E5E7EB",
borderRadius: 12,
},
featuredCollection: {
id: "lunchboxes-and-bags",
title: "Lunchboxes & Bags",
},
isActive: false,
},

[CAMPAIGN_IDS.SUMMER_PLAYHOUSE]: {

id: CAMPAIGN_IDS.SUMMER_PLAYHOUSE,
label: "Summer Playhouse",
theme: {
primary: "#0284C7",
background: "#E0F2FE",
secondary: "#38BDF8",
text: "#0F172A",
card: "#FFFFFF",
border: "#E5E7EB",
borderRadius: 12,
},
featuredCollection: {
id: "petting-zoo",
title: "Petting Zoo Tickets",
},
isActive: false,
},

[CAMPAIGN_IDS.MYSTERY_GIFT_CARNIVAL]: {

id: CAMPAIGN_IDS.MYSTERY_GIFT_CARNIVAL,
label: "Mystery Gift Carnival",
theme: {
primary: "#DC2626",
background: "#FEE2E2",
secondary: "#F87171",
text: "#111827",
card: "#FFFFFF",
border: "#E5E7EB",
borderRadius: 12,
},
featuredCollection: {
id: "mystery-gifts",
title: "Mystery Gifts",
},
isActive: false,
},
};

export function resolveCampaign(
campaignId: keyof CampaignRegistry
): CampaignConfig | null {
return (
campaignRegistry[campaignId] ?? null
);
}
