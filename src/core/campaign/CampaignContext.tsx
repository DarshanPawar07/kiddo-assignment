import { createContext } from "react";

import type {
CampaignConfig,
CampaignContextValue,
} from "@/types/campaign.types";

export const CampaignContext =
createContext<CampaignContextValue>({
activeCampaign: null,
setActiveCampaign: () => {},
clearCampaign: () => {},
});
