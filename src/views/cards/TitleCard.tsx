import React from 'react';
import styled from 'styled-components';
import {
  HeaderFont,
  SubheaderFont,
  LogoSubtitle,
  ParagraphFont,
  Card,
  CardTextContent,
  CONTENT_MAX_WIDTH,
  rhythm,
} from 'styles';
import { SofiLogo } from 'images';

const UncontainedCard = styled(Card)`
  margin-top: ${rhythm(1)}px;
  max-width: ${CONTENT_MAX_WIDTH}px;
  margin-right: auto;
  margin-left: auto;
`;

const TitleCard: React.FC = () => {
  return (
    <UncontainedCard
      titleCard
      lastJustifyContentCenter
      lastWidth={50}
      firstWidth={50}>
      <CardTextContent>
        <span>
          <HeaderFont>Shae Watson</HeaderFont>
          <LogoSubtitle>
            <img
              src={SofiLogo}
              alt="SoFi logo"
              style={{
                display: 'block',
                maxWidth: '30px',
                maxHeight: '30px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
            <SubheaderFont>SoFi 2020</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>...</ParagraphFont>
        <ParagraphFont>...</ParagraphFont>
        <ParagraphFont>
          <span role="img" aria-label="clapper board">
            🎬
          </span>{' '}
          ...
        </ParagraphFont>
      </CardTextContent>
    </UncontainedCard>
  );
};

export default TitleCard;
