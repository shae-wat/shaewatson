import React from 'react';
import { HeaderFont, SubheaderFont, ParagraphFont } from '../../styles';
import { ClaraRecommendedLoanImageSrc, ClaraLogo } from '../../images';
import { Card, CardTextContent, CardImageContent } from '.';
import { LogoSubtitle } from '../components';

const ClaraRecommendedLoan: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50} lastJustifyContentCenter>
      <CardTextContent>
        <span>
          <HeaderFont>Loan Recommendation: Borrower UI</HeaderFont>
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
          At the end of a step-by-step flow with questions for a mortgage
          pre-qualification application, the user at Clara Lending was
          recommended a loan for which they could apply for preapproval- along
          with the option to select an alternative loan option.
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
