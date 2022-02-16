import React from 'react';
import { Page, PageCardLayout } from '.';
import {
  CustomDropdownCard,
  FlightStatsArrivalsDeparturesCard,
  OroxWebsiteCard,
  UTFunctionalGenomicsLabCard,
  RelayStrategiesStrategyCard,
  RelayHighUserVolumeCard,
  RelayOfflineFirstCard,
  SoFiBrandThoCard,
  ClaraJSPluginCard,
  RelayChunkingCard,
  SoFiStyleConstantsCard,
  WWCPortlandWorkshopLeaderCard,
} from 'views/cards';

const FeaturedWorkPage: React.FC = () => {
  return (
    <Page>
      <PageCardLayout>
        <SoFiBrandThoCard />
        <RelayOfflineFirstCard />
        <RelayChunkingCard />
        <RelayHighUserVolumeCard />
        <RelayStrategiesStrategyCard />
        <SoFiStyleConstantsCard />
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
