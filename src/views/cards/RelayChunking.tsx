import React from 'react';
import {
  HeaderFont,
  SubheaderFont,
  LogoSubtitle,
  ParagraphFont,
  Card,
  CardTextContent,
  CardImageContent,
  rhythm,
} from 'styles';
import { RelayOverviewPageSrc, SofiLogo } from 'images';

const RelayChunking: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50} lastJustifyContentCenter>
      <CardImageContent>
        <img
          src={RelayOverviewPageSrc}
          alt="Relay web app"
          style={{
            display: 'block',
            maxWidth: '640px',
            maxHeight: '470px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>

      <CardTextContent paddingTop={rhythm(2)}>
        <span>
          <HeaderFont>Reducing Time to First Paint with JS Chunks</HeaderFont>
          <LogoSubtitle>
            <img
              src={SofiLogo}
              alt="SoFi logo"
              style={{
                display: 'block',
                maxWidth: '30px',
                maxHeight: '30px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
            <SubheaderFont>SoFi 2019</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          As the SoFi Relay project got larger with more features and onboarding
          flows added every quarter, it became unreasonable to deliver the
          JavaScript in one large file. The need for the fastest JavaScript
          download possible especially became imperative when the web app
          started to be served in the Relay tab of the native iOS and Android
          apps.
        </ParagraphFont>
        <ParagraphFont>
          The app is bundled by Webpack with code-splitting by route. Using this
          pattern, each page of the app is its own JavaScript file.
        </ParagraphFont>
        <ParagraphFont>
          This improves load time over networks as the user does not have to
          wait for the large JavaScript files to download before seeing the
          content of the page. Instead the browser loads many smaller JavaScript
          files based on the pages needed for the user.
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default RelayChunking;
