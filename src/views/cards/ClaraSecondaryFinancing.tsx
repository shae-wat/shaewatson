import React from 'react';
import { HeaderFont, ParagraphFont } from '../../styles';
import { ClaraSecondaryFinancingGifSrc } from '../../images';
import { Card, CardTextContent, CardImageContent } from '.';

const ClaraSecondaryFinancing: React.FC = () => {
  return (
    <Card>
      <CardImageContent>
        <img
          src={ClaraSecondaryFinancingGifSrc}
          alt="Dynamic inputs for secondary financing"
          role="presentation"
          style={{
            display: 'block',
            maxWidth: '1431px',
            maxHeight: '810px',
            width: '100%',
            height: 'auto',
          }}
        />
      </CardImageContent>
      <CardTextContent>
        <HeaderFont>Secondary Financing</HeaderFont>
        <ParagraphFont>Clara Secondary Financing dynamic inputs</ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default ClaraSecondaryFinancing;
