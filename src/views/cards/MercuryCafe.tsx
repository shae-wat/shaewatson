import React from 'react';
import {
  HeaderFont,
  ParagraphFont,
  LogoSubtitle,
  SubheaderFont,
  Card,
  CardTextContent,
  CardImageContent,
  LinkText,
  Colors,
} from 'styles';
import { MercuryCafeWebsitePic } from 'images';

const MercuryCafe: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50} lastJustifyContentCenter>
      <CardTextContent>
        <span>
          <HeaderFont>Mercury Cafe Customized Website</HeaderFont>
          <LogoSubtitle>
            <SubheaderFont>2025</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          Working on the website of a small business a decade into my career
          demonstrates how far I have come, after first managing websites for
          small businesses at the beginning of my web development career.
        </ParagraphFont>
        <ParagraphFont>
          Applying changes is quick and executed with surgical prudence and
          precision, and I am able to advise and direct the work from a place of
          deeply understanding long-term infrastructure support from the
          technology platforms.
        </ParagraphFont>
        <ParagraphFont>
          Building for longevity and ease of understanding for busy small
          business owners allows me to be resourceful and work within my values
          locally for family-owned small businesses. I take pride in building
          and maintaining the user interface for businesses that are embedded in
          serving their local community.
        </ParagraphFont>
        <LinkText
          color={Colors.lightBlue}
          href="https://www.mercurycafe.net/"
          target="_blank"
          rel="noopener noreferrer">
          mercurycafe.net
        </LinkText>
      </CardTextContent>
      <CardImageContent>
        <img
          src={MercuryCafeWebsitePic}
          alt="Mercury Cafe website"
          style={{
            display: 'block',
            maxWidth: '300px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      </CardImageContent>
    </Card>
  );
};

export default MercuryCafe;
