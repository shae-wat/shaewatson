import React from 'react';
import {
  HeaderFont,
  ParagraphFont,
  LogoSubtitle,
  SubheaderFont,
  Card,
  CardTextContent,
  CardImageContent,
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
        <ParagraphFont>...</ParagraphFont>
      </CardTextContent>
      <CardImageContent>
        <img
          src={MercuryCafeWebsitePic}
          alt="Dad and I working on playhouse"
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
