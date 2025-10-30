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
    <Card firstWidth={50} lastWidth={50} firstJustifyContentCenter>
      <CardImageContent>
        <img
          src={MontellWorkshopPic}
          alt="Screenshot of writing workshop with Amanda Montell"
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
        <ParagraphFont>
          During the lockdown of the pandemic, new opportunities to connect with
          others online popped up, including zoom workshops. I took Amanda
          Montell’s writing workshop in early 2021, after her publication of
          Wordslut and before Cultish was released.
        </ParagraphFont>
        <ParagraphFont>
          The group worked through writing prompts together and learned about
          writing nonfiction in an engaging way, inspired by Amanda and other
          writers like Mary Roach.
        </ParagraphFont>
        <ParagraphFont>
          The workshop ended with attendees submitting a writing sample that was
          reviewed by other attendees and Amanda as how she was working with
          editors to publish her own nonfiction work.
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default MontellWorkshop;
