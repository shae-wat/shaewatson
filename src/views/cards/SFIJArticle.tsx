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
  SFIJVacacyArticle,
  SFIJLogo,
  FillEmptyHomesLogo,
  IGVacancyPost,
  DSASFLogo,
} from 'images';

const SFIJArticle: React.FC = () => {
  return (
    <Card firstWidth={40} lastWidth={60}>
      <CardImageContent
        style={{
          marginTop: 'auto',
          marginBottom: 'auto',
        }}>
        <img
          src={SFIJVacacyArticle}
          alt=""
          style={{
            display: 'block',
            maxWidth: '350px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <LinkText
          color={Colors.lightBlue}
          href="https://sfindependentjournal.com/land-use-report-40000-vacant-homes-the-same-year-8000-people-were-homeless/"
          style={{
            display: 'block',
            maxWidth: '350px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '12px',
            marginBottom: '12px',
          }}
          target="_blank"
          rel="noopener noreferrer">
          San Francisco Land Use Report Shows 40,000 Vacant Homes the Same Year
          8,000 People Were Homeless
        </LinkText>
      </CardImageContent>
      <CardTextContent>
        <span>
          <HeaderFont>
            Writing like a Journalist and Posting like a Social Media Manager
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
            <SubheaderFont>
              Fill Empty Homes November 2022 Prop M Campaign
            </SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          As the fill empty homes campaign launched, there needed to be
          education for the public about the land use report that demonstrated
          the vacancy problem in San Francisco statistically with data.
        </ParagraphFont>
        <ParagraphFont>
          I worked with a local designer to develop graphics to illustrate
          important numbers from the report and choose to contrast that with the
          outrageous homeless count of SF. I wrote the SFIJ article and then
          used language from the article in an Instagram post that generated
          over 14k views.
        </ParagraphFont>
        <ParagraphFont>
          This work pushed me to grow as I wrote about socio-economic issues and
          started developing rhetoric for the campaign. I practiced conveying
          information succinctly for social media so that most people could
          understand the point being conveyed.
        </ParagraphFont>
        <img
          src={IGVacancyPost}
          alt=""
          style={{
            display: 'block',
            maxWidth: '550px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <LinkText
          color={Colors.lightBlue}
          href="https://www.instagram.com/p/CZdAsfKPqx5/"
          style={{
            display: 'block',
            maxWidth: '350px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '12px',
            marginBottom: '12px',
          }}
          target="_blank"
          rel="noopener noreferrer">
          Instagram post
        </LinkText>
      </CardTextContent>
    </Card>
  );
};

export default SFIJArticle;
