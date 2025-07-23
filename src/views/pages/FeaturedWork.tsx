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
  WWCPortlandWorkshopLeaderCard,
  SFIJArticleCard,
  SmallBusinessForwardCard,
  SmallBusinessForwardPressCard,
} from 'views/cards';

const FeaturedWorkPage: React.FC = () => {
  return (
    <Page>
      <PageCardLayout>
        <SmallBusinessForwardPressCard />
        <SmallBusinessForwardCard />
        <EvenYearElectionsCampaignCard />
        <FillEmptyHomesCard />
        <SFIJArticleCard />
        <ShiftPointCard />
        <SoFiBrandThoCard />
        <RelayChunkingCard />
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
