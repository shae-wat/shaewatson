import React from 'react';
import { HeaderFont, ParagraphFont } from '../../styles';
import { ClaraRecommendedLoanImageSrc } from '../../images';
import { Card, CardTextContent, CardImageContent } from '.';

const ClaraRecommendedLoan: React.FC = () => {
  return (
    <Card>
      <CardTextContent>
        <HeaderFont>Loan Recommendation - Customer UI</HeaderFont>
        <ParagraphFont>
          One step of buying a home is getting pre-approved for a mortgage,
          which is often required by realtors before showing the house.
        </ParagraphFont>
        <ParagraphFont>
          At the end of a step-by-step flow with a clear questions for a
          mortgage pre-qualification application, the user is recommended a loan
          that they can apply for pre-approval for along with the option to
          select an alternative. Clearly, Clara Lending had a powerful backend
          which was interfaced with the user in a clear, well deisgined way. The
          Clara Lending
        </ParagraphFont>
      </CardTextContent>
      <CardImageContent>
        <img
          src={ClaraRecommendedLoanImageSrc}
          alt="Dashboard with inputs and search results for mortgage products at Clara Lending"
          role="presentation"
          style={{
            display: 'block',
            maxWidth: '438px',
            maxHeight: '595px',
            width: '100%',
            height: 'auto',
          }}
        />
      </CardImageContent>
    </Card>
  );
};

export default ClaraRecommendedLoan;
