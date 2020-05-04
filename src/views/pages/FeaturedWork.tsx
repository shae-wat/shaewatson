import React from 'react';
import { Page, PageCardLayout } from '.';
import {
  ClaraPowerPricingCard,
  CustomDropdownCard,
  ClaraRecommendedLoanCard,
  FlightStatsArrivalsDeparturesCard,
  OroxWebsiteCard,
  UTFunctionalGenomicsLabCard,
  RelayStrategiesStrategyCard,
  RelayHighUserVolumeCard,
  RelayOfflineFirstCard,
  SoFiBrandThoCard,
} from 'views/cards';

const FeaturedWorkPage: React.FC = () => {
  return (
    <Page>
      <PageCardLayout>
        <SoFiBrandThoCard />
        <RelayOfflineFirstCard />
        <RelayHighUserVolumeCard />
        <RelayStrategiesStrategyCard />
        <ClaraRecommendedLoanCard />
        <ClaraPowerPricingCard />
        <CustomDropdownCard />
        <FlightStatsArrivalsDeparturesCard />
        <OroxWebsiteCard />
        <UTFunctionalGenomicsLabCard />
      </PageCardLayout>
    </Page>
  );
};

export default FeaturedWorkPage;
