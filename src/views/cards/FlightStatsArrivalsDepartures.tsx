import React from 'react';
import { HeaderFont, SubheaderFont, ParagraphFont } from '../../styles';
import { FSDepArrImageSrc } from '../../images';
import { Card, CardTextContent, CardImageContent } from '.';

const FlightStatsArrivalsDepartures: React.FC = () => {
  return (
    <Card>
      <CardImageContent>
        <img
          src={FSDepArrImageSrc}
          alt="Dashboard with inputs and search results for flight arrivals and departures"
          role="presentation"
          style={{
            display: 'block',
            maxWidth: '653px',
            maxHeight: '536px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
      <CardTextContent>
        <span>
          <HeaderFont>Airport Departures & Arrivals Page</HeaderFont>
          <SubheaderFont>FlightStats 2015</SubheaderFont>
        </span>

        <ParagraphFont>
          On the departures and arrivals page of FlightStats, several filters
          could be applied to see a list of relevant departing and arriving
          flights.
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default FlightStatsArrivalsDepartures;
