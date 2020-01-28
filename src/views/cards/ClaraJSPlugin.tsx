import React from 'react';
import { ClaraCalculatorPluginSrc, ClaraLogo } from '../../images';
import {
  HeaderFont,
  SubheaderFont,
  ParagraphFont,
  rhythm,
  LogoSubtitle,
  Card,
  CardTextContent,
  CardImageContent,
} from '../../styles';

const ClaraJSPlugin: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50} lastJustifyContentCenter>
      <CardTextContent paddingTop={rhythm(1)}>
        <span>
          <HeaderFont>Plugins For Marketing WordPress Sites</HeaderFont>
          <LogoSubtitle>
            <img
              src={ClaraLogo}
              alt="Clara Lending logo"
              style={{
                display: 'block',
                maxWidth: '30px',
                maxHeight: '30px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
            <SubheaderFont>Clara Lending 2017</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          A comman ask from small, scappy startups is for interactive content to
          be added to marketing websites.
        </ParagraphFont>
        <ParagraphFont>
          When I was tasked to add a mortgage calculator to the marketing
          website at Clara Lending, I did so by compiling the existing mortgage
          calculator React component into a JS file that was statically hosted
          on s3. Compiling the component by itself required a Webpack
          compilation configuration that would exclude any JavaScript not
          related to the mortgage calculator.
        </ParagraphFont>
        <ParagraphFont>
          Referencing the hosted JS file in a script tag on the marketing page
          made it a painless way to add the calculator to the marketing
          Wordpress site.
        </ParagraphFont>
      </CardTextContent>
      <CardImageContent>
        <img
          src={ClaraCalculatorPluginSrc}
          alt=""
          style={{
            display: 'block',
            maxWidth: '1018px',
            maxHeight: '390px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
    </Card>
  );
};

export default ClaraJSPlugin;
