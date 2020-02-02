import React from 'react';
import { Page, PageCardLayout } from '.';
import {
  ClaraPowerPricingCard,
  CustomDropdownCard,
  CivilSauceTestingCard,
  ClaraRecommendedLoanCard,
  FlightStatsArrivalsDeparturesCard,
  OroxWebsiteCard,
  UTFunctionalGenomicsLabCard,
  SoFiStyleConstantsCard,
  RelayStrategiesStrategyCard,
  RelayHighUserVolumeCard,
  RelayOfflineFirstCard,
  RelayChunkingCard,
  ClaraJSPluginCard,
  WWCPortlandWorkshopLeaderCard,
} from 'views/cards';

const FeaturedWorkPage: React.FC = () => {
  return (
    <Page>
      <PageCardLayout>
        <RelayOfflineFirstCard />
        <RelayChunkingCard />
        <RelayHighUserVolumeCard />
        <RelayStrategiesStrategyCard />
        <SoFiStyleConstantsCard />
        <ClaraRecommendedLoanCard />
        <ClaraPowerPricingCard />
        <ClaraJSPluginCard />
        <WWCPortlandWorkshopLeaderCard />
        <CustomDropdownCard />
        <CivilSauceTestingCard />
        <FlightStatsArrivalsDeparturesCard />
        <OroxWebsiteCard />
        <UTFunctionalGenomicsLabCard />
      </PageCardLayout>
    </Page>
  );
};

export default FeaturedWorkPage;
