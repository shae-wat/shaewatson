import React from 'react';
import {
  HeaderFont,
  SubheaderFont,
  ParagraphFont,
  LogoSubtitle,
  Card,
  CardTextContent,
  CardImageContent,
} from 'styles';
import { PowerPricerImageSrc, ClaraLogo } from 'images';

const ClaraPowerPricing: React.FC = () => {
  return (
    <Card firstJustifyContentCenter>
      <CardImageContent>
        <img
          src={PowerPricerImageSrc}
          alt="Dashboard with inputs and search results for mortgage products at Clara Lending"
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
          <HeaderFont>Mortgage Pricing: Loan Officer User Interface</HeaderFont>
          <LogoSubtitle>
            <img
              src={ClaraLogo}
              alt="Clara Lending logo"
              style={{
                display: 'block',
                maxWidth: '30px',
                maxHeight: '30px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
            <SubheaderFont>Clara Lending 2017</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          At Clara Lending, loan officers used the admin page I built to manage
          mortgage applications.
        </ParagraphFont>
        <ParagraphFont>
          Loan officers input desired loan attributes into the page, then choose
          from the filtered search results of internally priced loan products.
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default ClaraPowerPricing;
