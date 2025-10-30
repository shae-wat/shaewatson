import React from 'react';
import {
  HeaderFont,
  SubheaderFont,
  LogoSubtitle,
  ParagraphFont,
  Card,
  CardTextContent,
  CardImageContent,
} from 'styles';
import { SpendingCategoriesGif, SofiLogo } from 'images';

const RelayOfflineFirst: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50} lastJustifyContentCenter>
      <CardTextContent>
        <span>
          <HeaderFont>
            Data Loading Offline-first for a Chart in Production for (Almost) a
            Decade
          </HeaderFont>
          <LogoSubtitle>
            <img
              src={SofiLogo}
              alt="SoFi logo"
              style={{
                display: 'block',
                maxWidth: '30px',
                maxHeight: '30px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
            <SubheaderFont>SoFi 2019</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          The ultimate test for a robust app is that it continues to work if
          internet is disconnected.
        </ParagraphFont>
        <ParagraphFont>
          If there is any data from a previous request to display from the Redux
          store, it is shown even if there is an error with a later request to
          the API. If no displayable data from the backend has been received and
          there is an error, only after a few retries, show the full page error.
        </ParagraphFont>
        <ParagraphFont>
          Major feature data is eagerly requested and put into the Redux store.
          When the app successfully requests all the pre-load data after the
          initial page draw, the user will not see any errors viewing feature
          pages.
        </ParagraphFont>
        <ParagraphFont>
          Between the eager data requests and the React Javascript seamlessly
          redrawing with new data, the spending categories chart has been
          difficult to replace with mobile infrastructure, with SoFi rolling
          back attempts to release new versions of the spending categories chart
          over the years.
        </ParagraphFont>
        <ParagraphFont>
          However, the ability to recategorize transactions and see the chart
          update immediately and for the chart to persist in network request
          failure has not be robustly replicated by other engineers on other
          platforms, leaving the spending categories chart I built in 2018
          running still in 2025 on web and app versions of the SoFi app.
        </ParagraphFont>
      </CardTextContent>
      <CardImageContent>
        <img
          src={SpendingCategoriesGif}
          alt="Relay web app"
          style={{
            display: 'block',
            maxWidth: '640px',
            maxHeight: '470px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
    </Card>
  );
};

export default RelayOfflineFirst;
