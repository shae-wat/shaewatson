import React from 'react';
import { Page, PageCardLayout } from '.';
import {
  EvenYearElectionsCampaignCard,
  FillEmptyHomesCard,
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
  RelayHighUserVolumeCard,
  CivilSauceTestingCard,
  ClaraPowerPricingCard,
  RelayOfflineFirstCard,
  MontellWorkshop,
  MercuryCafe,
} from 'views/cards';

const FeaturedWorkPage: React.FC = () => {
  return (
    <Page>
      <PageCardLayout>
        <MercuryCafe />
        <SmallBusinessForwardPressCard />
        <SmallBusinessForwardCard />
        <EvenYearElectionsCampaignCard />
        <FillEmptyHomesCard />
        <SFIJArticleCard />
        <MontellWorkshop />
        <SoFiBrandThoCard />
        <RelayHighUserVolumeCard />
        <RelayOfflineFirstCard />
        <RelayChunkingCard />
        <RelayStrategiesStrategyCard />
        <ClaraPowerPricingCard />
        <ClaraJSPluginCard />
        <CivilSauceTestingCard />
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
