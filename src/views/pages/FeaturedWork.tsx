import React from 'react';
import { Page, PageCardLayout } from '.';
import {
  EvenYearElectionsCampaignCard,
  FillEmptyHomesCard,
  ShiftPointCard,
  CustomDropdownCard,
  FlightStatsArrivalsDeparturesCard,
  OroxWebsiteCard,
  UTFunctionalGenomicsLabCard,
  RelayStrategiesStrategyCard,
  SoFiBrandThoCard,
  ClaraJSPluginCard,
  RelayChunkingCard,
  SoFiStyleConstantsCard,
  WWCPortlandWorkshopLeaderCard,
  SFIJWebsiteCard,
  SFIJArticleCard,
} from 'views/cards';

const FeaturedWorkPage: React.FC = () => {
  return (
    <Page>
      <PageCardLayout>
        <SFIJWebsiteCard />
        <EvenYearElectionsCampaignCard />
        <FillEmptyHomesCard />
        <SFIJArticleCard />
        <ShiftPointCard />
        <SoFiBrandThoCard />
        <RelayChunkingCard />
        <SoFiStyleConstantsCard />
        <RelayStrategiesStrategyCard />
        <ClaraJSPluginCard />
        <CustomDropdownCard />
        <WWCPortlandWorkshopLeaderCard />
        <FlightStatsArrivalsDeparturesCard />
        <OroxWebsiteCard />
        <UTFunctionalGenomicsLabCard />
      </PageCardLayout>
    </Page>
  );
};

export default FeaturedWorkPage;
