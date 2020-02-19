import React from 'react';
import {
  HeaderFont,
  SubheaderFont,
  LogoSubtitle,
  ParagraphFont,
  Card,
  CardTextContent,
  CardImageContent,
  rhythm,
} from 'styles';
import { RelayOfflineMobileDashboardSrc, SofiLogo } from 'images';

const RelayOfflineFirst: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50} firstJustifyContentCenter>
      <CardImageContent>
        <img
          src={RelayOfflineMobileDashboardSrc}
          alt="Relay web app"
          style={{
            display: 'block',
            maxWidth: '404px',
            maxHeight: '835px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
      <CardTextContent paddingTop={rhythm(3)}>
        <span>
          <HeaderFont>Data Loading Strategy for Mobile-First</HeaderFont>
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
          I have always wanted to build an offline-first app that continues to
          work if internet is disconnected during a user session.
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
          This offline experience is formalized as a strategy in the SoFi Relay
          front-end project. A strategy is a code pattern that results in the
          best user experience possible. Strategies are democratic team
          decisions forever open to re-examination and iteration, formalized
          with an update to the source controlled strategies doc file.
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default RelayOfflineFirst;
