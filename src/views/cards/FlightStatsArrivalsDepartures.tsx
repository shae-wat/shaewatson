import React from 'react';
import { HeaderFont, ParagraphFont } from '../../styles';
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
          }}
        />
      </CardImageContent>
      <CardTextContent>
        <HeaderFont>Airport Departures and Arrivals Page</HeaderFont>
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