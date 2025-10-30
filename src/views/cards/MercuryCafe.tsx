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
import { MercuryCafeWebsitePic, MercuryCafeSeo } from 'images';

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
          Working on the website of a small business in 2025 demonstrates how
          far I have come, after first managing websites for small businesses a
          decade ago at the beginning of my web development career.
        </ParagraphFont>
        <ParagraphFont>
          Applying changes is quick and executed with surgical prudence and
          precision, and I am able to advise and direct the work from a place of
          deep understanding for long-term infrastructure support from available
          technology platforms.
        </ParagraphFont>
        <ParagraphFont>
          Building for longevity and ease of understanding for busy small
          business owners drives me to be resourceful while working within my
          values locally for family-owned small businesses. I take pride in
          building and maintaining the user interface and improving search
          results and ranking for businesses that are serving their local
          community.
        </ParagraphFont>
        <img
          src={MercuryCafeSeo}
          alt="View of the Mercury Cafe search result in Google 2025"
          style={{
            display: 'block',
            maxWidth: '400px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '24px',
            marginBottom: '24px',
          }}
        />
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
