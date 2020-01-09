import React from 'react';
import styled from 'styled-components';
import {
  HeaderFont,
  SubheaderFont,
  LogoSubtitle,
  Card,
  CardTextContent,
  CardImageContent,
  desktopMediaQuery,
  rhythm,
} from '../../styles';
import { SofiSpendingBurdownSrc, SofiLogo } from '../../images';

const TempHeaderWhileWriteContent = styled.span`
  ${desktopMediaQuery(`margin-top: ${rhythm(2)}px;`)}
`;

const RelayStrategiesStrategy: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50} lastJustifyContentCenter>
      <CardTextContent>
        <TempHeaderWhileWriteContent>
          <HeaderFont>
            Launch Personal Finance Management Web App with Values and
            Strategies: SoFi Relay 🚀
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
        </TempHeaderWhileWriteContent>
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
