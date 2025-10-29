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
import { MontellWorkshopPic } from 'images';

const MontellWorkshop: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50}>
      <CardImageContent>
        <img
          src={MontellWorkshopPic}
          alt="Dad and I working on playhouse"
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
          <HeaderFont>Amanda Montell Writing Workshop</HeaderFont>
          <LogoSubtitle>
            <SubheaderFont>2021</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>...</ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default MontellWorkshop;
