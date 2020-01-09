import React from 'react';
import {
  HeaderFont,
  SubheaderFont,
  LogoSubtitle,
  Card,
  CardTextContent,
  CardImageContent,
} from '../../styles';
import { SofiSpendingBurdownSrc, SofiLogo } from '../../images';

const RelayStrategiesStrategy: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50} lastJustifyContentCenter>
      <CardTextContent>
        <span>
          <HeaderFont>
            Launch Personal Finance Managment Web App with Values and Strategies
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
