import React from 'react';
import { HeaderFont, ParagraphFont } from '../../styles';
import { SofiSharingConstantsSrc } from '../../images';
import { Card, CardTextContent, CardImageContent } from '.';

const SoFiStyleConstants: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50} lastJustifyContentCenter>
      <CardTextContent>
        <HeaderFont>Sharing Constants with Design</HeaderFont>
        <ParagraphFont>
          Sharing CSS constants and therefore design understanding with
          designers drastically improves the developer experience and speed.
          Though I was skeptical when first using this practice at Clara
          Lending, I soon found myself breezing through implementing new
          designs.
        </ParagraphFont>
        <ParagraphFont>
          After I shared about the improved consistancy and expressive CSS to
          other teams at SoFi, the practice of design constants was adopted by
          the team maintaining the shared UI component library at SoFi. team
          breezing through implementing new designs.
        </ParagraphFont>
        <ParagraphFont>
          Vertical margins and padding are based on an established vertical
          rhythm pattern, where everything is based on a <code>rhythm</code>{' '}
          constant. Horizontal margins and padding are based on gutter and
          column constants.
        </ParagraphFont>
      </CardTextContent>
      <CardImageContent>
        <img
          src={SofiSharingConstantsSrc}
          alt="Relay web app image"
          role="presentation"
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
    </Card>
  );
};

export default SoFiStyleConstants;
