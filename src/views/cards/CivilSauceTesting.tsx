import React from 'react';
import {
  HeaderFont,
  ParagraphFont,
  Card,
  CardTextContent,
  CardImageContent,
} from '../../styles';
import { SauceLabsDashboardImageSrc } from '../../images';

const SauceTesting: React.FC = () => {
  return (
    <Card>
      <CardImageContent>
        <img
          src={SauceLabsDashboardImageSrc}
          alt="Dashboard with inputs and search results for mortgage products at Clara Lending"
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
