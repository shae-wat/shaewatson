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
} from '../../styles';
import { RelayOverviewPageSrc, SofiLogo } from '../../images';

const RelayOfflineFirst: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50} lastJustifyContentCenter>
      <CardTextContent paddingTop={rhythm(3)}>
        <span>
          <HeaderFont>
            A Data Loading Strategy for a Mobile-First App
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
          I have always wanted to build an offline-first app that continues to
          work if internet is disconnected during a user session.
        </ParagraphFont>
        <ParagraphFont>
          If there is any data from a previous request to display from the Redux
          store, it is shown even if there is an error a later request to the
          API. If no displayable data from the backend has been received and
          there is an error, only after a few retries, show the full page error.
        </ParagraphFont>
        <ParagraphFont>
          This offline experience is formalized as a strategy in the SoFi Relay
          front-end project. A strategy is a code pattern that results in the
          best user experience possible, and are democratic team decisions that
          are forever open to re-examination and iteration. A strategy update is
          agreed upon by the team democratically and manifests as an update to
          the source controlled strategies doc file.
        </ParagraphFont>
      </CardTextContent>
      <CardImageContent>
        <img
          src={RelayOverviewPageSrc}
          alt="Relay web app"
          style={{
            display: 'block',
            maxWidth: '812px',
            maxHeight: '1040px',
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
