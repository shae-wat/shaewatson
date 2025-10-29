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
import { SBFLogo, SBFNo36Press, SBFUpzoningPress } from 'images';

const SmallBusinessForwardPress: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50}>
      <CardImageContent>
        <img
          src={SBFUpzoningPress}
          alt="San Francisco Examiner article screenshot, April 22, 2025"
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
          src={SBFNo36Press}
          alt="SingTao article screenshot, Oct 23, 2024"
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
            Read all about it: Being a press contact for small businesses
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
          Working to respond to outreach for comment and send out press
          releases, I connected small business speakers and quotes with media
          outlets in San Francisco to give small businesses a voice to advocate
          for themselves.
        </ParagraphFont>
        <ParagraphFont>
          For one advocacy effort, I oversaw over 100 San Francisco small
          businesses signing onto a letter that was sent to the press.
        </ParagraphFont>
        <LinkText
          color={Colors.lightBlue}
          href="https://docs.google.com/forms/d/e/1FAIpQLSetVQOmOR67C2Fqy8U7npcBVOlsgtVqro1idjWWowX6X05jwQ/viewform"
          target="_blank"
          rel="noopener noreferrer">
          Permanent Controls for Neighborhood-Serving Businesses Letter with
          over 100 Small Business Sign-ons
        </LinkText>
        <LinkText
          color={Colors.lightBlue}
          href="https://www.sfexaminer.com/news/housing/sf-upzoning-could-displace-small-businesses-advocates-warn/article_fd67588b-3246-49f2-9dda-9c4011d40e8c.html"
          target="_blank"
          rel="noopener noreferrer">
          San Francisco Examiner, Apr 22, 2025: SF upzoning could displace small
          businesses, advocates warn
        </LinkText>

        <LinkText
          color={Colors.lightBlue}
          href="https://48hills.org/2025/04/small-business-groups-push-for-protections-from-luries-upzoning-and-displacement/"
          target="_blank"
          rel="noopener noreferrer">
          48 Hills, Apr 17, 2025: Small business groups push for protections
          from Lurie’s upzoning (and displacement)
        </LinkText>

        <LinkText
          color={Colors.lightBlue}
          href="https://www.nytimes.com/2025/02/06/us/politics/daniel-lurie-san-francisco-mayor-levis.html"
          target="_blank"
          rel="noopener noreferrer">
          New York Times, Feb 6, 2025: San Francisco’s New Mayor Is Rich. Is
          That a Good Thing?
        </LinkText>

        <LinkText
          color={Colors.lightBlue}
          href="https://www.kqed.org/forum/2010101907916/what-it-takes-to-make-it-as-a-small-business-in-the-bay-area"
          target="_blank"
          rel="noopener noreferrer">
          KQED's The Forum, Nov 21, 2024: "What It Takes to Make It as a Small
          Business in the Bay Area"
        </LinkText>

        <LinkText
          color={Colors.lightBlue}
          href="https://www.masslive.com/news/2024/11/boston-explores-fee-on-vacant-storefronts-to-revitalize-neighborhoods.html"
          target="_blank"
          rel="noopener noreferrer">
          MassLive, Nov 17, 2024: Boston explores fee on vacant storefronts to
          revitalize neighborhoods
        </LinkText>

        <LinkText
          color={Colors.lightBlue}
          href="https://www.ktsf.com/2024/10/23/no-on-prop-36/"
          target="_blank"
          rel="noopener noreferrer">
          KTSF26, Oct 23, 2024:【灣區新聞】有進步派華人組織反對36號提案
          認為把盜賊送進監牢是治標不治本(視頻) [Bay Area News] A progressive
          Chinese organization opposes Proposition 36 and believes that sending
          thieves to prison is treating the symptoms rather than the root cause
          (Video)
        </LinkText>

        <LinkText
          color={Colors.lightBlue}
          href="https://www.singtaousa.com/2024-10-23/%e5%a4%9a%e5%80%8b%e7%a4%be%e5%8d%80%e7%b5%84%e7%b9%94%e9%9b%86%e6%9c%83-%e5%8f%8d%e5%b0%8d%e4%b8%89%e5%8d%81%e5%85%ad%e8%99%9f%e6%8f%90%e6%a1%88/5031981#page2"
          target="_blank"
          rel="noopener noreferrer">
          SingTao, Oct 23, 2024: 多個社區組織集會 反對三十六號提案 , Multiple
          community organizations rallied to oppose Proposition 36, gave org
          Chinese name 小商業前進 (Small Business Forward)
        </LinkText>

        <LinkText
          color={Colors.lightBlue}
          href="https://www.kron4.com/news/bay-area/san-francisco-small-business-owners-rally-against-prop-36/"
          target="_blank"
          rel="noopener noreferrer">
          KRON4, Oct 22, 2024: San Francisco small business owners rally against
          Prop 36
        </LinkText>

        <LinkText
          color={Colors.lightBlue}
          href="https://www.sfexaminer.com/forum/neil-mehta-gaslighting-fillmore-about-neighborhood-land-grab/article_464f2ca2-8a25-11ef-9920-47b9271c7ade.html"
          target="_blank"
          rel="noopener noreferrer">
          San Francisco Examiner, Opinion by By Justin Dolezal, Special to The
          Examiner, Bar Part Time owner, Oct 14, 2024: Neil Mehta gaslighting
          about Fillmore land grab
        </LinkText>

        <LinkText
          color={Colors.lightBlue}
          href="https://richmondsunsetnews.com/2024/10/03/eviction-protection-proposed-for-legacy-businesses/"
          target="_blank"
          rel="noopener noreferrer">
          Richmond Review/Sunset Beacon, Oct 3, 2024: Eviction Protection
          Proposed For Legacy Businesses
        </LinkText>

        <LinkText
          color={Colors.lightBlue}
          href="https://www.sfchronicle.com/sf/article/vc-hostile-takeover-fillmore-neighborhood-19719260.php"
          target="_blank"
          rel="noopener noreferrer">
          San Francisco Chronicle, Aug 26, 2024: VC accused of ‘hostile
          takeover’ of S.F. neighborhood. New proposal could help legacy
          businesses
        </LinkText>

        <LinkText
          color={Colors.lightBlue}
          href="https://missionlocal.org/2024/06/mark-farrell-ballot-designation-challenge/"
          target="_blank"
          rel="noopener noreferrer">
          Mission Local, Jun 24, 2024: Small-business owners challenge Mark
          Farrell’s ballot designation
        </LinkText>

        <LinkText
          color={Colors.lightBlue}
          href="https://missionlocal.org/2024/05/meet-district-5-candidates-week14-business/"
          target="_blank"
          rel="noopener noreferrer">
          Mission Local, May 7, 2024: District 5 candidates talk business
        </LinkText>
      </CardTextContent>
    </Card>
  );
};

export default SmallBusinessForwardPress;
