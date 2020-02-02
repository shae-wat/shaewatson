import React from 'react';
import {
  HeaderFont,
  ParagraphFont,
  LogoSubtitle,
  SubheaderFont,
  gutter,
  Card,
  CardTextContent,
  CardImageContent,
} from 'styles';
import { SofiSharingConstantsSrc, SofiLogo, ClaraLogo } from 'images';

const SoFiStyleConstants: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50} firstJustifyContentCenter>
      <CardImageContent>
        <img
          src={SofiSharingConstantsSrc}
          alt="Drake no to non-descriptive way of writing CSS, Drake yes to descriptive way of writing CSS with design constants"
          style={{
            display: 'block',
            maxWidth: '1066px',
            maxHeight: '824px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
      <CardTextContent>
        <span>
          <HeaderFont>Sharing Constants with Design</HeaderFont>
          <LogoSubtitle>
            <img
              src={ClaraLogo}
              alt="Clara Lending logo"
              style={{
                display: 'block',
                maxWidth: '30px',
                maxHeight: '30px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
            <SubheaderFont>Clara Lending </SubheaderFont>
            <SubheaderFont style={{ marginLeft: `${gutter(1 / 2)}px` }}>
              {' - '}
            </SubheaderFont>
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
                marginLeft: `${gutter(1 / 2)}px`,
              }}
            />
            <SubheaderFont>SoFi 2018</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          Sharing design constants and therefore understanding with designers
          drastically improves front-end developer experience and speed. Though
          I was skeptical when first using this practice at Clara Lending, I
          soon found myself breezing through the implementation of new designs.
        </ParagraphFont>
        <ParagraphFont>
          After initializing the SoFi Relay product with the design constant
          strategy, I talked about the improved consistency and expressive CSS
          with other teams at SoFi.
        </ParagraphFont>
        <ParagraphFont>
          Soon the practice of design constants was adopted by the team
          maintaining the shared UI component library at SoFi. Now the team is
          more aligned with design with constants driving conscious decisions
          and clear CSS syntax.
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default SoFiStyleConstants;
