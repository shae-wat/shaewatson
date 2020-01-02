import React from 'react';
import { OroxWebsiteImageSrc } from '../../images';
import { HeaderFont, SubheaderFont, ParagraphFont } from '../../styles';
import { Card, CardTextContent, CardImageContent } from '.';
import { OroxLogo } from '../../images';
import { LogoSubtitle } from '../components';

const OroxWebsite: React.FC = () => {
  return (
    <Card firstWidth={40} lastWidth={50} lastJustifyContentCenter>
      <CardTextContent>
        <span>
          <HeaderFont>Orox Leather Customized Website</HeaderFont>
          <LogoSubtitle>
            <img
              src={OroxLogo}
              alt="Orox Leather logo"
              style={{
                display: 'block',
                maxWidth: '30px',
                maxHeight: '30px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
            <SubheaderFont>Orox Leather 2015</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          {`In my early career, I especially enjoyed styling the `}
          <a
            href="https://www.oroxleather.com/"
            target="_blank"
            rel="noopener noreferrer">
            Orox Leather
          </a>
          {` website. Orox sells unique, fine leather products and needed a website
          to reflect their unique and special style. I made CSS and JS changes to an
          existing Shopify theme to match their requested website design, pictured here.`}
        </ParagraphFont>
      </CardTextContent>
      <CardImageContent>
        <img
          src={OroxWebsiteImageSrc}
          alt="Dashboard with inputs and search results for mortgage products at Clara Lending"
          role="presentation"
          style={{
            display: 'block',
            maxWidth: '500px',
            maxHeight: '581px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
    </Card>
  );
};

export default OroxWebsite;
