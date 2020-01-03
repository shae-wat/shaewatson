import React from 'react';
import {
  HeaderFont,
  SubheaderFont,
  LogoSubtitle,
  ParagraphFont,
} from '../../styles';
import { SofiSpendingBurdownSrc, SofiLogo } from '../../images';
import { Card, CardTextContent, CardImageContent } from '.';

const RelayHighUserVolume: React.FC = () => {
  return (
    <Card>
      <CardImageContent>
        <img
          src={SofiSpendingBurdownSrc}
          alt="Relay web app"
          role="presentation"
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
          <HeaderFont>Monitoring a high-volume app</HeaderFont>
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
        <ParagraphFont>number of users</ParagraphFont>
        <ParagraphFont>
          error tracking and alerting - Error reporting based on UI/UX strategy
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default RelayHighUserVolume;
