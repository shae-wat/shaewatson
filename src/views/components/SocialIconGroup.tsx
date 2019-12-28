import React from 'react';
import styled from 'styled-components';
import {
  SocialGithubImageSrc,
  SocialLinkedInImageSrc,
  SocialMediumImageSrc,
} from '../../images';
import { gutter } from '../../styles';

const SocialIconGroupContainer = styled.div`
  > * {
    margin-right: ${gutter(1)}px;
  }
`;

const StyledCustomIcon = styled.img`
  border-radius: 33px;
`;

const SocialIconGroup: React.FC = () => {
  return (
    <SocialIconGroupContainer>
      <a
        href="https://github.com/shae-wat"
        target="_blank"
        rel="noopener noreferrer">
        <img src={SocialGithubImageSrc} height={33} alt="logo" />
      </a>
      <a
        href="https://www.linkedin.com/in/shaelynwatson/"
        target="_blank"
        rel="noopener noreferrer">
        <img src={SocialLinkedInImageSrc} height={33} alt="logo" />
      </a>
      <a
        href="https://medium.com/@shaewat"
        target="_blank"
        rel="noopener noreferrer">
        <StyledCustomIcon src={SocialMediumImageSrc} height={33} alt="logo" />
      </a>
    </SocialIconGroupContainer>
  );
};

export default SocialIconGroup;
