import React from 'react';
import {
  HeaderFont,
  SubheaderFont,
  ParagraphFont,
  LogoSubtitle,
} from '../../styles';
import { ClaraRecommendedLoanImageSrc, ClaraLogo } from '../../images';
import { Card, CardTextContent, CardImageContent } from '.';

const ClaraRecommendedLoan: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50} lastJustifyContentCenter>
      <CardTextContent>
        <span>
          <HeaderFont>Mortgage Pre-Approval and Recommendation</HeaderFont>
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
          One step of buying a home is getting pre-approved for a mortgage,
          which is often required by realtors before showing a property.
        </ParagraphFont>
        <ParagraphFont>
          At the end of a clearly designed question-by-question flow for a
          mortgage pre-qualification application, Clara Lending recommended a
          loan to the user.
        </ParagraphFont>
        <ParagraphFont>
          The user could then continue through the flow to apply for
          pre-approval for the recommended loan, or could view and apply for
          alternative loan options based on their pre-qualification application.
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
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
    </Card>
  );
};

export default ClaraRecommendedLoan;
