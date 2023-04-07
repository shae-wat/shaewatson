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
            Update Wordpress design for Leftist Independent Newspaper 💅
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
              San Francisco Independent Journal 2023
            </SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          I worked within the Wordpress site for SFIJ to clean up the front
          page. I switched up the serif of fonts to make the text easier to
          parse. I also reconfigure article categories and the top navigation
          bar to make it more clear to reporters how to properly tag their
          articles.
        </ParagraphFont>
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
