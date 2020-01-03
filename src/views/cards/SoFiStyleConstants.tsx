import React from 'react';
import {
  HeaderFont,
  SubheaderFont,
  LogoSubtitle,
  ParagraphFont,
} from '../../styles';
import { SofiSharingConstantsSrc, SofiLogo } from '../../images';
import { Card, CardTextContent, CardImageContent } from '.';

const SoFiStyleConstants: React.FC = () => {
  return (
    <Card>
      <CardTextContent>
        <span>
          <HeaderFont>Sharing Constants with Design</HeaderFont>
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
          Vertical margins and padding are based on an established vertical
          rhythm pattern, where everything is a multiple of 4px and based on a{' '}
          <code>rhythm</code> function. Horizontal margins and padding are based
          on on gutter and column definition.
        </ParagraphFont>
        <ParagraphFont>
          Though I was skeptical when first using this practice at Clara
          Lending, I soon found myself breezing through implementing new designs
          with these horizontal and vertical definitions. The meme demonstrates
          conscious design decisions were made when assigning that padding to an
          element.
        </ParagraphFont>
        <ParagraphFont>
          {' '}
          Sharing CSS constants and therefore design understanding with the
          Clara Lending designer drastically improved my developer experience
          and speed. adoption at SoFi
        </ParagraphFont>
      </CardTextContent>
      <CardImageContent>
        <img
          src={SofiSharingConstantsSrc}
          alt="Relay web app image"
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
    </Card>
  );
};

export default SoFiStyleConstants;
