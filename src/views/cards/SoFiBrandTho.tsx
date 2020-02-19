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
import { SoFiChartOnTVSrc, SofiLogo } from 'images';

const SoFiBrandTho: React.FC = () => {
  return (
    <Card lastJustifyContentCenter lastWidth={50} firstWidth={50}>
      <CardTextContent>
        <span>
          <HeaderFont>That SoFi Brand Tho</HeaderFont>
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
          It is really cool to contribute to an app with a spunky, sharp
          financial voice. The SoFi brand has attracted many people to the Relay
          app.
        </ParagraphFont>
        <ParagraphFont>
          When launching the new credit score feature for Relay, the number of
          users that found the new feature in the first few months was in the
          thousands.
        </ParagraphFont>
        <ParagraphFont>
          <span role="img" aria-label="clapper board">
            🎬
          </span>
          Also, sometimes the charts of the Relay app get to be on TV!{' '}
        </ParagraphFont>
      </CardTextContent>
      <CardImageContent>
        <img
          src={SoFiChartOnTVSrc}
          alt="Relay spending categories chart on TV screen during the USWNT World Cup June 2019"
          style={{
            display: 'block',
            maxWidth: '600px',
            maxHeight: '314px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
    </Card>
  );
};

export default SoFiBrandTho;
