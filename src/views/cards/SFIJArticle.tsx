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
import { SFIJVacacyArticle, SFIJLogo } from 'images';

const SFIJArticle: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50}>
      <CardImageContent>
        <img
          src={SFIJVacacyArticle}
          alt=""
          style={{
            display: 'block',
            maxWidth: '500px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      </CardImageContent>
      <CardTextContent>
        <span>
          <HeaderFont>Exploring journalism</HeaderFont>
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
              2022 San Francisco Independent Journal
            </SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>...</ParagraphFont>
        <ParagraphFont>...</ParagraphFont>
        <ParagraphFont>...</ParagraphFont>
        <ParagraphFont>..</ParagraphFont>
        <LinkText
          color={Colors.lightBlue}
          href="https://sfindependentjournal.com/"
          target="_blank"
          rel="noopener noreferrer">
          sfindependentjournal.com
        </LinkText>
      </CardTextContent>
    </Card>
  );
};

export default SFIJArticle;
