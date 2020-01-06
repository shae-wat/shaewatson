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
import { SofiSpendingBurdownSrc, SofiLogo } from '../../images';

const RelayStrategiesStrategy: React.FC = () => {
  return (
    <Card>
      <CardImageContent>
        <img
          src={SofiSpendingBurdownSrc}
          alt="Relay web app"
          style={{
            display: 'block',
            maxWidth: '800px',
            maxHeight: '357px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
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
        <ParagraphFont>
          Values and Strategies When this project was just starting out, values
          were established that led to the architectural and code stylings of
          this project
        </ParagraphFont>
        <ParagraphFont>values</ParagraphFont>
        <ParagraphFont>strategies</ParagraphFont>
        <ParagraphFont>launch date</ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default RelayStrategiesStrategy;
