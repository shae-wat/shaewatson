import React from 'react';
import {
  HeaderFont,
  ParagraphFont,
  LogoSubtitle,
  SubheaderFont,
  // gutter,
  Card,
  CardTextContent,
  CardImageContent,
  LinkText,
  Colors,
} from 'styles';
import { SFIJFrontpage, SBFLogo } from 'images';

const SmallBusinessForwardPress: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50}>
      <CardImageContent>
        <img
          src={SFIJFrontpage}
          alt="Fill Empty Homes Campaign Website with pic of coalition of people and endorsed by Democratic Socialists of America, Faith in Action Bay Area, and SF Labor Council"
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
          <HeaderFont>
            Read All About It: Small Businesses In the News
          </HeaderFont>
          <LogoSubtitle>
            <img
              src={SBFLogo}
              alt="Yes on H Double the vote in local elections"
              style={{
                display: 'block',
                maxWidth: '30px',
                maxHeight: '30px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
            <SubheaderFont>Small Business Forward 2024</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          I am proud to have contributed to the early efforts of Small Business
          Forward starting in August 2023 when I posted the group's first
          Instagram story working as the group's coordinator.
        </ParagraphFont>
        <ParagraphFont>
          I worked with the founders to define and illustrate the organizing
          values that the group would base its advocacy on. I worked to promote
          the kickoff, events and did internal group outreach phonebanking to
          increase turnout to these events and awareness of our group.
        </ParagraphFont>
        <ParagraphFont>
          I enjoyed writing the first draft of the newsletter the most, because
          it allowed me to synthesize all the conversations I was having with
          different small businesses and annouce our advocacy achievements, of
          which there were many.
        </ParagraphFont>
        <ParagraphFont>
          Helping the team lauch Small Business Forward allowed my experience in
          technical startups to shine through as I was able to define all the
          platforms the group needed and get them set up on those platforms for
          maximum efficiency with minimal upkeep needed.
        </ParagraphFont>
        <LinkText
          color={Colors.lightBlue}
          href="https://web.archive.org/web/20221002190929/https://www.fillemptyhomes.com/"
          target="_blank"
          rel="noopener noreferrer">
          fillemptyhomes.com / llenarcasasvacias.com
        </LinkText>
        <LinkText
          color={Colors.lightBlue}
          href="https://web.archive.org/web/20221104174228/https://www.upthevotesf.com/"
          target="_blank"
          rel="noopener noreferrer">
          upthevotesf.com
        </LinkText>
        <LinkText
          color={Colors.lightBlue}
          href="https://web.archive.org/web/20220925231206/https://www.sfstudentsuccess.com/"
          target="_blank"
          rel="noopener noreferrer">
          sfstudentsuccess.com
        </LinkText>
      </CardTextContent>
    </Card>
  );
};

export default SmallBusinessForwardPress;
