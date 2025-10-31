import React from 'react';
import {
  HeaderFont,
  ParagraphFont,
  LogoSubtitle,
  SubheaderFont,
  Card,
  CardTextContent,
  CardImageContent,
  LinkText,
  Colors,
} from 'styles';
import { YesHLogo, Campaign2022Pic, PropHFaqGif } from 'images';

const EvenYearElectionsCampaign: React.FC = () => {
  return (
    <Card firstWidth={55} lastWidth={45} firstJustifyContentCenter>
      <CardImageContent>
        <img
          src={PropHFaqGif}
          alt="Yes H website"
          style={{
            display: 'block',
            maxWidth: '800px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '24px',
          }}
        />
        <LinkText
          color={Colors.lightBlue}
          href="https://web.archive.org/web/20221104174228/https://www.upthevotesf.com/"
          target="_blank"
          rel="noopener noreferrer">
          upthevotesf.com
        </LinkText>
      </CardImageContent>
      <CardTextContent>
        <span>
          <HeaderFont>
            "Profound for the future of progressive politics in this city"
          </HeaderFont>
          <LogoSubtitle>
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
            <SubheaderFont>
              Even Year Elections November 2022 Prop H Campaign
            </SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          Being the campaign manager for the Even Years Election Campaign in San
          Francisco was the most difficult and rewarding work I have done in my
          life.
        </ParagraphFont>
        <ParagraphFont>
          The campaign made me stretch in all my abilities from public speaking
          to event planning to rapid development with estimated timelines. I
          edited and maintained ballot arguments to submit to the Department of
          Elections for printing in the Voter Information Pamphlet mailed to all
          San Francisco voters, with a form “wet” signed by each endorser whose
          name is printed. I managed endorsements, ballot arguments, and
          endorser signatures again for March 2024's Prop A $300M Affordable
          Housing Bond.
        </ParagraphFont>
        <ParagraphFont>
          Between the ballot argument and endorsement process, mobilization
          events, phonebanks, and fundraising— I grew my networks and enjoyed
          working with lots of different people.
        </ParagraphFont>
        <img
          src={Campaign2022Pic}
          alt="Campaigns at mobilization 2022"
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
      </CardTextContent>
    </Card>
  );
};

export default EvenYearElectionsCampaign;
