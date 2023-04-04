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
import { YesHLogo, Campaign2022Pic, YesHWebsitePic } from 'images';

const EvenYearElectionsCampaign: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50}>
      <CardImageContent>
        <img
          src={YesHWebsitePic}
          alt="Yes H website"
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
            <SubheaderFont>November 2022 Election Cycle</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          Being the campaign manager for the Even Years Election Campaign in San
          Francisco was the most difficult and rewarding work I have done in my
          life.
        </ParagraphFont>
        <ParagraphFont>
          The campaign made me stretch in all my abilities from public speaking
          to event planning to rapid development with estimated timelines.
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
