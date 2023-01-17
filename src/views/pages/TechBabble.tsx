import React from 'react';
import { Page, PageCardLayout } from '.';
import {
  RelayChunkingCard,
  RelayOfflineFirstCard,
  RelayHighUserVolumeCard,
  RelayStrategiesStrategyCard,
  SoFiStyleConstantsCard,
  ClaraJSPluginCard,
  CivilSauceTestingCard,
} from 'views/cards';

const TechBabblePage: React.FC = () => {
  return (
    <Page>
      <PageCardLayout>
        <RelayChunkingCard />
        <RelayOfflineFirstCard />
        <RelayHighUserVolumeCard />
        <RelayStrategiesStrategyCard />
        <SoFiStyleConstantsCard />
        <ClaraJSPluginCard />
        <CivilSauceTestingCard />
      </PageCardLayout>
    </Page>
  );
};

export default TechBabblePage;
