import React from 'react';
import {
  HeaderFont,
  ParagraphFont,
  Card,
  CardTextContent,
  CardImageContent,
  LinkText,
} from '../../styles';
import { SauceLabsDashboardImageSrc } from '../../images';

const SauceTesting: React.FC = () => {
  return (
    <Card firstJustifyContentCenter>
      <CardImageContent>
        <img
          src={SauceLabsDashboardImageSrc}
          alt="Dashboard with inputs and search results for mortgage products at Clara Lending"
          style={{
            display: 'block',
            maxWidth: '800px',
            maxHeight: '357px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
      <CardTextContent>
        <HeaderFont>Sauce Labs Testing</HeaderFont>
        <ParagraphFont>
          Sauce Labs Testing
          <LinkText
            href="https://medium.com/@shaewat/multi-platform-user-interface-testing-with-selenium-and-node-js-567b8fb624e8"
            target="_blank"
            rel="noopener noreferrer">
            {
              'Multi-Platform User Interface Testing with Selenium and Sauce Labs'
            }
          </LinkText>
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default SauceTesting;
