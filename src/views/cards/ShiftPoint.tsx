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
import { DadPlayhousePic } from 'images';

const ShiftPoint: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50}>
      <CardImageContent>
        <img
          src={DadPlayhousePic}
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
          <HeaderFont>Reflecting and living this one precious life</HeaderFont>
          <LogoSubtitle>
            <SubheaderFont>2021</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          After 10 years focusing on my technical software development, I took
          time out of the traditional workforce. May things led to this— I
          provided care-taking and spent final days with my terminally ill
          father as the COVID-19 pandemic challenged the fabric of our society.
        </ParagraphFont>
        <ParagraphFont>
          The illusion of Silicon Valley reached new peaks in the stock market
          and my employer SoFi IPO'ed in the context of economic abandonment and
          mass death.
        </ParagraphFont>
        <ParagraphFont>
          I decided to buy myself time to care for the people sharing this world
          and life with me and to re-align myself with my newfound deeper
          understanding of the world and economic forces.
        </ParagraphFont>
        <ParagraphFont>
          My father did not survive to retirement age, so I am glad I took this
          time in my own life because a peaceful retirement and time off at the
          end of one's life is not guaranteed.
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default ShiftPoint;
