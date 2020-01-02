import React from 'react';
import {
  UTFunctionalGenomicsLabImageSrc,
  UTFunctionalGenomicsLabLogoSrc,
} from '../../images';
import { HeaderFont, SubheaderFont, ParagraphFont, rhythm } from '../../styles';
import { Card, CardTextContent, CardImageContent } from '.';
import { LogoSubtitle } from '../components';

const UTFunctionalGenomicsLab: React.FC = () => {
  return (
    <Card>
      <CardImageContent>
        <img
          src={UTFunctionalGenomicsLabImageSrc}
          alt="Dashboard with inputs and search results for flight arrivals and departures"
          role="presentation"
          style={{
            display: 'block',
            maxWidth: '809px',
            maxHeight: '450px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
      <CardTextContent paddingTop={rhythm(1)}>
        <span>
          <HeaderFont>Visualization of Changes in Gene Expression</HeaderFont>
          <LogoSubtitle>
            <img
              src={UTFunctionalGenomicsLabLogoSrc}
              height="auto"
              alt="UT Austin Functional Genomics logo"
              style={{
                display: 'block',
                maxWidth: '30px',
                maxHeight: '40px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
            <SubheaderFont>Functional Genomics Research Lab 2011</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          {`I was drawn to the intersection of design, product management, and engineering during college while working in
          the `}
          <a
            href="http://fg.cns.utexas.edu/fg/home.html"
            target="_blank"
            rel="noopener noreferrer">
            University of Texas at Austin’s Functional Genomics Research Stream.
          </a>
        </ParagraphFont>
        <ParagraphFont>
          After micropipetting for a few months, I switched to writing code and
          leading a visualization effort for the data of the lab in order to
          parse meaning from the gigabytes of data produced by next generation
          sequencing technology.
        </ParagraphFont>
        <ParagraphFont>
          The software I wrote drew presentable images of interesting features
          in the genetic sequencing results, removing noise and allowing
          researchers to see the results of their work in an intuitive way where
          patterns could be generally recognized.
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default UTFunctionalGenomicsLab;
