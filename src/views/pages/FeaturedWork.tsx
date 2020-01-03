import React from 'react';
import { Page, PageCardLayout } from '.';
import {
  ClaraPowerPricingCard,
  CustomDropdownCard,
  ClaraRecommendedLoanCard,
  FlightStatsArrivalsDeparturesCard,
  OroxWebsiteCard,
  UTFunctionalGenomicsLabCard,
  SoFiStyleConstants,
} from '../cards';

const FeaturedWorkPage: React.FC = () => {
  return (
    <Page>
      <PageCardLayout>
        <SoFiStyleConstants />
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
