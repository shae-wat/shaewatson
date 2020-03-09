import React from 'react';
import styled from 'styled-components';
import {
  HeaderFont,
  SubheaderFont,
  ParagraphFont,
  Card,
  CardTextContent,
  CONTENT_MAX_WIDTH,
  rhythm,
} from 'styles';

const UncontainedCard = styled(Card)`
  margin-top: ${rhythm(1)}px;
  max-width: ${CONTENT_MAX_WIDTH}px;
  margin-right: auto;
  margin-left: auto;
`;

const TitleCard: React.FC = () => {
  return (
    <UncontainedCard titleCard>
      <CardTextContent>
        <HeaderFont>Front-end engineer with product focus</HeaderFont>
        <SubheaderFont>
          <span role="img" aria-label="clapper board">
            🎬
          </span>{' '}
          ...
        </SubheaderFont>
        <SubheaderFont>
          <span role="img" aria-label="clapper board">
            🎬
          </span>{' '}
          ...
        </SubheaderFont>
        <SubheaderFont>
          <span role="img" aria-label="clapper board">
            🎬
          </span>{' '}
          ...
        </SubheaderFont>
      </CardTextContent>
      <CardTextContent>
        <HeaderFont>...</HeaderFont>
        <ParagraphFont>
          <span role="img" aria-label="mobile phone">
            📱
          </span>{' '}
          ....
        </ParagraphFont>
        <ParagraphFont>
          <span role="img" aria-label="racecar">
            🏎
          </span>{' '}
          .....
        </ParagraphFont>
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
