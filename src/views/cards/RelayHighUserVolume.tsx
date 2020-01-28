import React from 'react';
import {
  HeaderFont,
  SubheaderFont,
  LogoSubtitle,
  ParagraphFont,
  Card,
  CardTextContent,
  CardImageContent,
} from '../../styles';
import { RelaySuccessConnectedSrc, SofiLogo } from '../../images';

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
            <SubheaderFont>SoFi 2019</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          SoFi Relay drives daily user engagement for SoFi's 1 million members.
          If a user has a bad experience- and especially if they see a full page
          error- it defeats the purpose of the app.
        </ParagraphFont>
        <ParagraphFont>
          That is why when I set up New Relic to track errors in the project, an
          alert was set to trigger in our Slack channel for each full page error
          shown to a user. I am proud of this system because it demonstrates the
          robustness of the app’s front-end architecture and how the team runs
          after problems.
        </ParagraphFont>
        <ParagraphFont>
          Alerting in a Slack channel drives accountability because it is
          visible and has a process where a discussion of the issue determines
          the work to prevent the issue in the future.
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default RelayHighUserVolume;
