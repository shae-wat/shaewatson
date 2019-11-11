import React from 'react';
import { Card, CardTextContent, CardImageContent } from '.';
import { OroxWebsiteImage } from '../../images';

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
        <h2>Orox Leather Branded Website</h2>
        <p>
          As a front end engineer, it is my job to bring a given design to life
          on a webpage. It is up to me to write the code in a way that is simple
          to extend and change while keeping a consistent experience of the
          visual design. The solidity of a front end implementation becomes
          apparent as the site is used on different machines and over time as
          content changes.
        </p>
        <p>
          {`In my early career, I especially enjoyed styling the `}
          <a
            href="https://www.oroxleather.com/"
            target="_blank"
            rel="noopener noreferrer">
            Orox Leather
          </a>
          {` website. Orox sells unique, fine leather products and needed a website
          to reflect their unique and special style. I made changes to the
          existing Shopify theme to match their requested design updates, making
          sure my updates would last a long time by writing clean, consistent,
          and intelligently designed CSS.`}
        </p>
      </CardTextContent>
    </Card>
  );
};

export default OroxWebsite;
