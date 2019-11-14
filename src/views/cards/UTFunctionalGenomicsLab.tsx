import React from 'react';
import { UTFunctionalGenomicsLabImage } from '../../images';
import { HeaderFont, ParagraphFont } from '../../styles';
import { Card, CardTextContent, CardImageContent } from '.';

const UTFunctionalGenomicsLab: React.FC = () => {
  return (
    <Card>
      <CardImageContent>
        <img
          src={UTFunctionalGenomicsLabImage}
          alt="Dashboard with inputs and search results for flight arrivals and departures"
          role="presentation"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
          }}
        />
      </CardImageContent>
      <CardTextContent>
        <HeaderFont>Visualization of Changes in Gene Expression</HeaderFont>
        <ParagraphFont>
          {`I got into design and visualization during college while working in
          the `}
          <a
            href="http://fg.cns.utexas.edu/fg/home.html"
            target="_blank"
            rel="noopener noreferrer">
            University of Texas at Austin’s Functional Genomics Research Stream.
          </a>
        </ParagraphFont>
        <ParagraphFont>
          After micropipetting for a few months, I was drawn to visualizing the
          data of the lab in order to parse meaning from the gigabytes of data
          produced by next generation sequencing technology.
        </ParagraphFont>
        <ParagraphFont>
          The software I wrote drew presentable images of the genetic sequencing
          results, removing noise and allowing researchers to see the results of
          their work in an intuitive way where patterns could be recognized.
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default UTFunctionalGenomicsLab;
