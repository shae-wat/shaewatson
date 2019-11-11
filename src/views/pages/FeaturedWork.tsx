import React from 'react';
import { Page, PageCardLayout } from '.';
import {
  ClaraPowerPricingCard,
  FlightStatsArrivalsDeparturesCard,
  OroxWebsiteCard,
  UTFunctionalGenomicsLabCard,
} from '../cards';

const FeaturedWorkPage: React.FC = () => {
  return (
    <Page>
      <PageCardLayout>
        <ClaraPowerPricingCard />
        <FlightStatsArrivalsDeparturesCard />
        <OroxWebsiteCard />
        <UTFunctionalGenomicsLabCard />
      </PageCardLayout>
    </Page>
  );
};

export default FeaturedWorkPage;
