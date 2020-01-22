import React from 'react';
import {
  HeaderFont,
  ParagraphFont,
  Card,
  CardTextContent,
  CardImageContent,
  LinkText,
  LogoSubtitle,
  SubheaderFont,
} from '../../styles';
import { SauceLabsDashboardImageSrc, CivilLogo } from '../../images';

const SauceTesting: React.FC = () => {
  return (
    <Card firstJustifyContentCenter>
      <CardImageContent>
        <img
          src={SauceLabsDashboardImageSrc}
          alt="Dashboard with inputs and search results for mortgage products at Clara Lending"
          style={{
            display: 'block',
            maxWidth: '800px',
            maxHeight: '357px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
      <CardTextContent>
        <span>
          <HeaderFont>Testing Across Browsers and Platforms</HeaderFont>
          <LogoSubtitle>
            <img
              src={CivilLogo}
              alt="Civil Comments logo"
              style={{
                display: 'block',
                maxWidth: '30px',
                maxHeight: '30px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
            <SubheaderFont>Civil Comments 2016</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          {`At Civil, I wrote Selenium tests that allow a series of interactions
          to run over a user interface on a web browser (and wrote a how-to with
          hundreds of reads `}
          <LinkText
            href="https://medium.com/@shaewat/multi-platform-user-interface-testing-with-selenium-and-node-js-567b8fb624e8"
            target="_blank"
            rel="noopener noreferrer">
            {
              'Multi-Platform User Interface Testing with Selenium and Sauce Labs'
            }
          </LinkText>
          ). The tests can check for the presence of text, click buttons, and
          input data into forms- mimicking how a user would interact with a
          website.
        </ParagraphFont>
        <ParagraphFont>
          Using the Sauce Labs service, I got the tests to run across a suite of
          PC, Mac, iOS, and Android platforms. The testing suite was extensive
          and thorough, but I quickly learned its limitations. It took 2.5 hours
          to run, and thus was quickly rejected as a step for the build.
        </ParagraphFont>
        <ParagraphFont>
          In the future, I would advocate for selenium happy-path testing as an
          async process that triggers errors that the team are respondent and
          accountable.
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default SauceTesting;
