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
          financial voice. The SoFi brand has attracted many people to the app.
          The rigor used to make the Relay web front-end was high from the
          start, and that gave us good momentutom to make a product that is used
          daily.
        </ParagraphFont>
        <ParagraphFont>
          When launching the new credit score feature for Relay, the number of
          users that found the new feature in the first few months was in the
          10,000's.
        </ParagraphFont>
        <ParagraphFont>
          Also, the chart in the app gets to be on TV!
        </ParagraphFont>
      </CardTextContent>
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
    </Card>
  );
};

export default SoFiBrandTho;
