import React from 'react';
import { HeaderFont, ParagraphFont } from '../../styles';
import { SauceLabsDashboardImageSrc } from '../../images';
import { Card, CardTextContent, CardImageContent } from '.';

const SauceTesting: React.FC = () => {
  return (
    <Card>
      <CardImageContent>
        <img
          src={SauceLabsDashboardImageSrc}
          alt="Dashboard with inputs and search results for mortgage products at Clara Lending"
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
        <HeaderFont>Sauce Labs Testing</HeaderFont>
        <ParagraphFont>Sauce Labs Testing</ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default SauceTesting;
