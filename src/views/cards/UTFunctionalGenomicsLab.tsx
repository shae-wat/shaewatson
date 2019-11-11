import React from 'react';
import { Card, CardTextContent, CardImageContent } from '.';
import { UTFunctionalGenomicsLabImage } from '../../images';

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
        <h2>Visualization of Changes in Gene Expression</h2>
        <p>
          {`I got into design and visualization during college while working in
          the `}
          <a
            href="http://fg.cns.utexas.edu/fg/home.html"
            target="_blank"
            rel="noopener noreferrer">
            University of Texas at Austin’s Functional Genomics Research Stream.
          </a>
        </p>
        <p>
          After micropipetting for a few months, I was drawn to visualizing the
          data of the lab in order to parse meaning from the gigabytes of
          numbers produced by next generation sequencing technology.
        </p>
        <p>
          The software I wrote drew presentable images of computationed results,
          removing noise and allowing researchers to see the results of their
          work in an intuitive way where patterns could be recognized.
        </p>
      </CardTextContent>
    </Card>
  );
};

export default UTFunctionalGenomicsLab;
