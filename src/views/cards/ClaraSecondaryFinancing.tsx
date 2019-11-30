import React from 'react';
import { HeaderFont, ParagraphFont } from '../../styles';
import { ClaraSecondaryFinancingGifSrc } from '../../images';
import { Card, CardTextContent, CardImageContent } from '.';

const ClaraSecondaryFinancing: React.FC = () => {
  return (
    <Card>
      <CardTextContent>
        <HeaderFont>Secondary Financing</HeaderFont>
        <ParagraphFont>Clara Secondary Financing dynamic inputs</ParagraphFont>
      </CardTextContent>
      <CardImageContent>
        <img
          src={ClaraSecondaryFinancingGifSrc}
          alt="Dynamic inputs for secondary financing"
          role="presentation"
          style={{
            display: 'block',
            maxWidth: '320px',
            maxHeight: '482px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
    </Card>
  );
};

export default ClaraSecondaryFinancing;
