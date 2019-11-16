import React from 'react';
import { HeaderFont, ParagraphFont } from '../../styles';
import { ClaraRecommendedLoanImageSrc } from '../../images';
import { Card, CardTextContent, CardImageContent } from '.';

const ClaraRecommendedLoan: React.FC = () => {
  return (
    <Card>
      <CardImageContent>
        <img
          src={ClaraRecommendedLoanImageSrc}
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
        <HeaderFont>Recommended Loan</HeaderFont>
        <ParagraphFont>Clara Lending Recommended Loan</ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default ClaraRecommendedLoan;
