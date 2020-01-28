import React from 'react';
import { WWCReactWorkshopLeaderSrc, WWCLogo } from '../../images';
import {
  HeaderFont,
  SubheaderFont,
  ParagraphFont,
  rhythm,
  LogoSubtitle,
  Card,
  CardTextContent,
  CardImageContent,
} from '../../styles';

const WWCPortlandWorkshopLeader: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50} firstJustifyContentCenter>
      <CardImageContent>
        <img
          src={WWCReactWorkshopLeaderSrc}
          alt="Shae leading group of people on their computers"
          style={{
            display: 'block',
            maxWidth: '540px',
            maxHeight: '689px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
      <CardTextContent paddingTop={rhythm(3)}>
        <span>
          <HeaderFont>Leading React.js Workshops</HeaderFont>
          <LogoSubtitle>
            <img
              src={WWCLogo}
              alt="Women Who Code logo"
              style={{
                display: 'block',
                maxWidth: '30px',
                maxHeight: '30px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
            <SubheaderFont>Women Who Code Portland 2016</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          In Portland, I led monthly React.js workshops for Women Who Code. The
          hands-on React development grew the interest and the aptitude of the
          community for web development.
        </ParagraphFont>
        <ParagraphFont>
          Leading these workshops allowed me to grow in my abilities as a
          developer from the collaboration and ideas of the attendees. I grew as
          a driver on the keyboard, learning how to confidently type and guide
          development in front of a group of people.
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default WWCPortlandWorkshopLeader;
