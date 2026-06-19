import {
ReactNode,
useMemo,
useState,
} from "react";

import type {
CampaignConfig,
} from "@/types/campaign.types";

import { CampaignContext } from "./CampaignContext";

interface CampaignProviderProps {
children: ReactNode;
}

export function CampaignProvider({
children,
}: CampaignProviderProps) {
const [activeCampaign, setCampaign] =
useState<CampaignConfig | null>(null);

const setActiveCampaign = (
campaign: CampaignConfig | null
) => {
setCampaign(campaign);
};

const clearCampaign = () => {
setCampaign(null);
};

const value = useMemo(
() => ({
activeCampaign,
setActiveCampaign,
clearCampaign,
}),
[activeCampaign]
);

return (
<CampaignContext.Provider value={value}>
{children}
</CampaignContext.Provider>
);
}
