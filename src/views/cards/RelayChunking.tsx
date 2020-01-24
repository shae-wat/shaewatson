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

const RelayChunking: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50} lastJustifyContentCenter>
      <CardTextContent paddingTop={rhythm(3)}>
        <span>
          <HeaderFont>
            Reducing Time to First Paint with JavaScript Chunks
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
        <ParagraphFont>...</ParagraphFont>
        <ParagraphFont>...</ParagraphFont>
        <ParagraphFont>...</ParagraphFont>
      </CardTextContent>
      <CardImageContent>
        <img
          src={RelayOverviewPageSrc}
          alt="Relay web app"
          style={{
            display: 'block',
            maxWidth: '640px',
            maxHeight: '470px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
    </Card>
  );
};

export default RelayChunking;
