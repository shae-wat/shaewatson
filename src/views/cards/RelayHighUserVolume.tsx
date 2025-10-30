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
import { RelaySuccessConnectedSrc, SofiLogo } from 'images';

const RelayHighUserVolume: React.FC = () => {
  return (
    <Card firstJustifyContentCenter>
      <CardImageContent>
        <img
          src={RelaySuccessConnectedSrc}
          alt="Relay web app"
          style={{
            display: 'block',
            maxWidth: '766px',
            maxHeight: '394px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
      <CardTextContent>
        <span>
          <HeaderFont>Error Monitoring for Thousands of Daily Users</HeaderFont>
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
            <SubheaderFont>SoFi 2020</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          SoFi Relay drives daily user engagement for SoFi's over 1 million
          members. During my time, the web app was shown on iOS and Android
          through webviews in addition to the website so that the product could
          be released as quickly as possible. If a user has a bad experience—
          and especially if they see a full page error— it defeats the purpose
          of the app.
        </ParagraphFont>
        <ParagraphFont>
          That is why when I set up error monitoring in the project, I set an
          alert to trigger in our Slack channel on every full page error shown—
          a Rollbar error was set to trigger from the error page render. This
          rigorous system demonstrates the robustness of my team's front-end
          architecture and how the team responded to problems.
        </ParagraphFont>
        <ParagraphFont>
          Alerting in a Slack channel drove accountability because it created a
          visible thread of discussion to determine how to address an issue and
          we practiced not ignoring any alert.
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default RelayHighUserVolume;
