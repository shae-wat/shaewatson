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
import {
  FillEmptyHomesCampaignPic,
  FillEmptyHomesLogo,
  YesHLogo,
  StudentSuccessLogo,
} from 'images';

const FillEmptyHomes: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50}>
      <CardTextContent>
        <span>
          <HeaderFont>
            Tech help for local San Francisco ballot measure campaigns
          </HeaderFont>
          <LogoSubtitle>
            <img
              src={FillEmptyHomesLogo}
              alt="Fill Empty Homes, Yes on M Campaign logo"
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
            <img
              src={YesHLogo}
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
            <img
              src={StudentSuccessLogo}
              alt="Yes on G Student Success"
              style={{
                display: 'block',
                maxWidth: '30px',
                maxHeight: '30px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
            <SubheaderFont>November 2022 Election Cycle</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          I am proud to have contributed to the early efforts of the Fill Empty
          Homes Campaign starting in February 2022 when I launched the website.
        </ParagraphFont>
        <ParagraphFont>
          I made graphics and worked with comms and artists to promote the
          kickoff and mobilization events and fundraisers. I participated in
          phonebanking to increase turnout to these events.
        </ParagraphFont>
        <ParagraphFont>
          After managing a design process between the consultant, the DSA
          organization, and artists while working on the Fill Empty Homes
          campaign, I was available to accept the the opportunity to run a
          parallel campaign for the Even Year Elections ballot measure, after it
          surprisingly made it onto the ballot.
        </ParagraphFont>
        <ParagraphFont>
          I ended up being the go-to for web and technical help for 3 successful
          November 2022 campaigns- I polished the user interface for the
          websites, contributed copy, gathered translations, and maintained the
          donation page.
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
      <CardImageContent>
        <img
          src={FillEmptyHomesCampaignPic}
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
    </Card>
  );
};

export default FillEmptyHomes;
