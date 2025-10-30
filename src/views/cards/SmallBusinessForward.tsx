import React from 'react';
import {
  HeaderFont,
  ParagraphFont,
  LogoSubtitle,
  SubheaderFont,
  // MicroFont,
  // gutter,
  Card,
  CardTextContent,
  CardImageContent,
  LinkText,
  Colors,
} from 'styles';
import {
  SBFLaunchCardImage,
  SBFLogo,
  SBFWebsiteView0,
  SBFWebsiteView1,
  SBFWebsiteView2,
  SBFWebsiteView3,
} from 'images';

const SmallBusinessForward: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50} lastJustifyContentCenter>
      <CardTextContent>
        <span>
          <HeaderFont>
            Launch Advocacy Nonprofit with Values: Small Business Forward 🌼
          </HeaderFont>
          <LogoSubtitle>
            <img
              src={SBFLogo}
              alt="Small Business Forward Logo"
              style={{
                display: 'block',
                maxWidth: '30px',
                maxHeight: '30px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
            <SubheaderFont>Small Business Forward 2023</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          I am proud to have developed the early efforts of the Small Business
          Forward San Francisco advocacy group starting in August 2023 when I
          posted the group's first Instagram story and launched the website
          working as the group's coordinator.
        </ParagraphFont>
        <img
          src={SBFLaunchCardImage}
          alt="View of the Small Business Forward Instagram page"
          style={{
            display: 'block',
            maxWidth: '400px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <ParagraphFont>
          Working with the small business founders to define and illustrate the
          organizing values that the group would base its advocacy on, I guided
          the group through getting legally defined as a Non-Profit 501(c)(4),
          running education sessions, and handling membership outreach to
          increase turnout to events and awareness of the group and advocacy.
        </ParagraphFont>
        <ParagraphFont>
          Writing the newsletter allowed me to synthesize all the conversations
          I was having with different small businesses and announce the group's
          advocacy achievements and efforts, of which there were many.
        </ParagraphFont>
        <LinkText
          color={Colors.lightBlue}
          href="https://drive.google.com/file/d/1L2uygDgsJ5iBQu3aIR3b84pAv_bvLv13/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">
          Small Business Forward Newsletter Collection
        </LinkText>
        <ParagraphFont>
          Coordinating the team through the launch of Small Business Forward
          allowed my experience in technical startups to shine through as I was
          able to establish all the platforms the group needed and get them set
          up on those platforms for maximum efficiency with minimal upkeep
          needed.
        </ParagraphFont>
        <LinkText
          color={Colors.lightBlue}
          href="https://smallbusinessforward.org"
          target="_blank"
          rel="noopener noreferrer">
          smallbusinessforward.org
        </LinkText>
      </CardTextContent>
      <CardImageContent>
        <img
          src={SBFWebsiteView0}
          alt="Small Business Forward Website view, Founded by small businesses to advocate for a better future"
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
        <img
          src={SBFWebsiteView1}
          alt="Small Business Forward Website view, values Realizing small business funding opportunities Commercial rent controls Fair taxation on businesses"
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
        <img
          src={SBFWebsiteView2}
          alt="Small Business Forward Website view, Affordable housing Right to unionize and workplace protections Community safety that works"
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
        <img
          src={SBFWebsiteView3}
          alt="Small Business Forward Website view, We believe our city can allow our diverse small business community to thrive"
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

export default SmallBusinessForward;
