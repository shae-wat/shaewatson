import React from 'react';
import { OroxWebsiteImageSrc, OroxLogo } from '../../images';
import {
  HeaderFont,
  SubheaderFont,
  ParagraphFont,
  LogoSubtitle,
  LinkText,
  Card,
  CardTextContent,
  CardImageContent,
  Colors,
} from '../../styles';

const OroxWebsite: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50} firstJustifyContentCenter>
      <CardImageContent>
        <img
          src={OroxWebsiteImageSrc}
          alt="Dashboard with inputs and search results for mortgage products at Clara Lending"
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
                background: `${Colors.white}`,
              }}
            />
            <SubheaderFont>Orox Leather 2015</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          In my early career, I grew in basic but significant ways styling the{' '}
          <LinkText
            href="https://www.oroxleather.com/"
            target="_blank"
            rel="noopener noreferrer">
            Orox Leather
          </LinkText>{' '}
          website.
        </ParagraphFont>
        <ParagraphFont>
          After a lifetime of mostly academia up to this point, this project
          from a local family-owned business helped me become a scrappy web
          product owner and manage a website on my own. I experienced the pride
          that comes from building and maintaining the UI of a business for the
          first time.
        </ParagraphFont>
        <ParagraphFont>
          I made CSS and JS changes to an existing Shopify theme to match the
          requested website design.
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default OroxWebsite;
