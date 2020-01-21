import React from 'react';
import {
  HeaderFont,
  SubheaderFont,
  LogoSubtitle,
  Card,
  CardTextContent,
  CardImageContent,
  ParagraphFont,
} from '../../styles';
import { SofiSpendingBurdownSrc, SofiLogo } from '../../images';

const RelayStrategiesStrategy: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50} lastJustifyContentCenter>
      <CardTextContent>
        <span>
          <HeaderFont>
            Launch Personal Finance Management Web App with Values: SoFi Relay{' '}
            <span role="img" aria-label="launch rocket">
              🚀
            </span>
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
            <SubheaderFont>SoFi 2018</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          After SoFi acquired Clara Lending in early 2018, my team transitioned
          to working on SoFi’s new personal finance app. As a daily Mint user at
          the time, it was super exciting for me to be part of the early product
          design thinking of SoFi Relay.
        </ParagraphFont>
        <ParagraphFont>
          Since it was a greenfield project, I led the team to establish values
          that would guide the architectural and code stylings of the front-end.
        </ParagraphFont>
        <ParagraphFont>
          For example, one value of the project is “the front-end web is a thin
          layer on top of the backend API.” This shared value drove many
          decisions and grounded many conversations during the initialization of
          the codebase, where the code written during that time has led to
          repeating patterns deeply embedded in the project.
        </ParagraphFont>
      </CardTextContent>
      <CardImageContent>
        <img
          src={SofiSpendingBurdownSrc}
          alt="Relay web app"
          style={{
            display: 'block',
            maxWidth: '436px',
            maxHeight: '576px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
    </Card>
  );
};

export default RelayStrategiesStrategy;
