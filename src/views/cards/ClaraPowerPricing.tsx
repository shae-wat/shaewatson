import React from 'react';
import { Card, CardTextContent } from '.';
import { PowerPricerImage } from '../../images';

const ClaraPowerPricing: React.FC = () => {
  return (
    <Card>
      <img
        src={PowerPricerImage}
        alt="Dashboard with inputs and search results for mortgage products at Clara Lending"
        role="presentation"
        style={{
          display: 'block',
          maxWidth: '1431px',
          maxHeight: '810px',
          width: 'auto',
          height: 'auto',
        }}
      />
      <CardTextContent>
        <b>Power Pricing Page</b>
        <p>
          The Power Pricing Page is a product I delivered at Clara Lending. It
          is an admin page designed to be used by loan officers in the context
          of a loan application. The loan officer enters all the inputs then can
          work with the borrower to select a loan product.
        </p>
        <p>
          This page is important because it allowed the intial connection of the
          Clara Lending Borrower Portal to a new pricing engine, LenderPrice,
          while also allowing the factoring in of Clara-specific variables such
          as different pricing results for Clara Lending promotions and limiting
          selectable options to mortgage configurations.
        </p>
      </CardTextContent>
    </Card>
  );
};

export default ClaraPowerPricing;
