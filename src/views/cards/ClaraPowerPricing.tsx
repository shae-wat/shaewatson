import React from 'react';
import { HeaderFont, SubheaderFont, ParagraphFont } from '../../styles';
import { PowerPricerImageSrc } from '../../images';
import { Card, CardTextContent, CardImageContent } from '.';

const ClaraPowerPricing: React.FC = () => {
  return (
    <Card>
      <CardImageContent>
        <img
          src={PowerPricerImageSrc}
          alt="Dashboard with inputs and search results for mortgage products at Clara Lending"
          role="presentation"
          style={{
            display: 'block',
            maxWidth: '1431px',
            maxHeight: '810px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
      <CardTextContent>
        <span>
          <HeaderFont>Mortgage Pricing: Loan Officer UI</HeaderFont>
          <SubheaderFont>Clara Lending 2017</SubheaderFont>
        </span>
        <ParagraphFont>
          At Clara Lending, loan officers used the Power Pricing Page as an
          admin page to manage mortgage applications.
        </ParagraphFont>
        <ParagraphFont>
          Loan officers input information relevant to Clara Lending into the
          page, then choose from the search results of clearly differentiated
          Clara Lending-priced loan products.
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default ClaraPowerPricing;
