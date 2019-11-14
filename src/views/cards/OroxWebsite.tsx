import React from 'react';
import { OroxWebsiteImage } from '../../images';
import { HeaderFont, ParagraphFont } from '../../styles';
import { Card, CardTextContent, CardImageContent } from '.';

const OroxWebsite: React.FC = () => {
  return (
    <Card>
      <CardImageContent>
        <img
          src={OroxWebsiteImage}
          alt="Dashboard with inputs and search results for mortgage products at Clara Lending"
          role="presentation"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
          }}
        />
      </CardImageContent>
      <CardTextContent>
        <HeaderFont>Orox Leather Branded Website</HeaderFont>
        <ParagraphFont>
          {`In my early career, I especially enjoyed styling the `}
          <a
            href="https://www.oroxleather.com/"
            target="_blank"
            rel="noopener noreferrer">
            Orox Leather
          </a>
          {` website. Orox sells unique, fine leather products and needed a website
          to reflect their unique and special style. I made CSS and JS changes to the
          existing Shopify theme to match their requested design updates.`}
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default OroxWebsite;
