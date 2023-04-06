import React from 'react';
import {
  HeaderFont,
  ParagraphFont,
  LogoSubtitle,
  SubheaderFont,
  gutter,
  Card,
  CardTextContent,
  CardImageContent,
  LinkText,
  Colors,
} from 'styles';
import { SFIJFrontpage, SFIJLogo } from 'images';

const SFIJWebsite: React.FC = () => {
  return (
    <Card firstWidth={40} lastWidth={60}>
      <CardTextContent>
        <span>
          <HeaderFont>
            Update Wordpress design for Leftist Independent Newspaper
          </HeaderFont>
          <LogoSubtitle>
            <img
              src={SFIJLogo}
              alt=""
              style={{
                display: 'block',
                maxWidth: '30px',
                maxHeight: '30px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                marginLeft: `${gutter(1 / 2)}px`,
              }}
            />
            <SubheaderFont>
              2023 San Francisco Independent Journal
            </SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          After contributing an article educating about the vacancy tax, I
          worked within the Wordpress site for SFIJ to clean up the front page
          with new fontfaces that make the text easier to parse and reconfigure
          article categories.
        </ParagraphFont>
        <ParagraphFont>...</ParagraphFont>
        <LinkText
          color={Colors.lightBlue}
          href="https://sfindependentjournal.com/"
          target="_blank"
          rel="noopener noreferrer">
          sfindependentjournal.com
        </LinkText>
      </CardTextContent>
      <CardImageContent>
        <img
          src={SFIJFrontpage}
          alt=""
          style={{
            display: 'block',
            maxWidth: '700px',
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

export default SFIJWebsite;
