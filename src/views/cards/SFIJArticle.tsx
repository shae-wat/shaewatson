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
import { SFIJVacacyArticle, SFIJLogo, FillEmptyHomesLogo } from 'images';

const SFIJArticle: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50}>
      <CardImageContent>
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
      </CardImageContent>
      <CardTextContent>
        <span>
          <HeaderFont>
            Writing like a journalist and posting like a social media manager
          </HeaderFont>
          <LogoSubtitle>
            <img
              src={SFIJLogo}
              alt=""
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
              San Francisco Independent Journal 2022
            </SubheaderFont>
          </LogoSubtitle>
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
            <SubheaderFont>Fill Empty Homes Prop M Campaign 2022</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          As the fill empty homes campaign launched, there needed to be
          education for the public about the land use report that demonstrated
          the vacancy problem in SF statistically with number data.
        </ParagraphFont>
        <ParagraphFont>
          I worked with a local designer to get graphics that focused on
          important numbers and choose to contrast that with the outrageous
          homeless count of SF. I wrote the article and then used language from
          the article on viral Instagram post that generated over 14k views.
        </ParagraphFont>
        <ParagraphFont>
          Got to express my developed views and start developing rhetoric for
          the campaign. Practiced iterating information succintly for social
          media.
        </ParagraphFont>
        <ParagraphFont>
          Idea was propagated across several newspapers, with one not even
          changing up my uniquely written first sentence.
        </ParagraphFont>
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
