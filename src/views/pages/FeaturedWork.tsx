import React from 'react';
import { Page, PageCardLayout } from '.';
import {
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
} from 'views/cards';

const FeaturedWorkPage: React.FC = () => {
  return (
    <Page>
      <PageCardLayout>
        <FillEmptyHomesCard />
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
