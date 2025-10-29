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
import { RelayOfflineMobileDashboardSrc, SofiLogo } from 'images';

const RelayOfflineFirst: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50}>
      <CardTextContent>
        <span>
          <HeaderFont>
            Data Loading Offline-first for a Robust High-touch App
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
      </CardTextContent>
      <CardImageContent>
        <img
          src={RelayOfflineMobileDashboardSrc}
          alt="Relay web app"
          style={{
            display: 'block',
            maxWidth: '300px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      </CardImageContent>
    </Card>
  );
};

export default RelayOfflineFirst;
