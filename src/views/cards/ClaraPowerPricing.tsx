import React from 'react';
import { Card, CardTextContent, CardImageContent } from '.';
import { PowerPricerImage } from '../../images';

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
        <h2>Power Pricing Page</h2>
        <p>
          The Power Pricing Page is a product I delivered at Clara Lending. It
          is an admin page for loan officers to use for loan applications. The
          loan officer enters relevant information into the inputs of the page,
          then can choose from clearly differentiated loan products returned as
          search results.
        </p>
        <p>
          This page is important because it allowed the intial connection of the
          Clara Lending Borrower Portal to a new pricing engine, LenderPrice,
          while also factoring-in Clara-specific variables such as different
          pricing results for Clara Lending promotions.
        </p>
      </CardTextContent>
    </Card>
  );
};

export default ClaraPowerPricing;
