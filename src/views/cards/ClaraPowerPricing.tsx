import React from 'react';
import { HeaderFont, ParagraphFont } from '../../styles';
import { PowerPricerImage } from '../../images';
import { Card, CardTextContent, CardImageContent } from '.';

const ClaraPowerPricing: React.FC = () => {
  return (
    <Card>
      <CardImageContent>
        <img
          src={PowerPricerImage}
          alt="Dashboard with inputs and search results for mortgage products at Clara Lending"
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
        <HeaderFont>Power Pricing Page</HeaderFont>
        <ParagraphFont>
          The Power Pricing Page was an admin page that loan officers used for
          managing mortgage applications at Clara Lending.
        </ParagraphFont>
        <ParagraphFont>
          The loan officer could enter relevant information into the inputs of
          the page, then can choose from the search results of clearly
          differentiated loan products.
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default ClaraPowerPricing;
