import React from 'react';
import { Card, CardTextContent, CardImageContent } from '.';
import { FSDepArrImage } from '../../images';

const FlightStatsArrivalsDepartures: React.FC = () => {
  return (
    <Card>
      <CardImageContent>
        <img
          src={FSDepArrImage}
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
        <h2>Airport Departures and Arrivals Page</h2>
        <p>
          React elements are cheap to create and can be used to render items
          expected to re-render on a webpage such as a list of results. On the
          FlightStats Departures and Arrivals page, the rows of the results
          table are all React components that render with basic styling
          depending on information about the flight status.
        </p>
        <p>
          On the departures and arrivals page, several filters can be applied to
          see a list of relevant departing and arriving flights. The experience
          of seeing an instantly updated results list of flight statuses and
          airport statistics based on filters prevents information overload for
          users. Not waiting for a reload builds user confidence, and is
          possible by triggering a simple and cheap re-render of the results
          when a filter is applied.
        </p>
      </CardTextContent>
    </Card>
  );
};

export default FlightStatsArrivalsDepartures;
