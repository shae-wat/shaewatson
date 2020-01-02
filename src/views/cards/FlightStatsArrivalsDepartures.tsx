import React from 'react';
import {
  HeaderFont,
  SubheaderFont,
  ParagraphFont,
  LinkText,
} from '../../styles';
import { FSDepArrImageSrc, FlightStatsLogo } from '../../images';
import { Card, CardTextContent, CardImageContent } from '.';
import { LogoSubtitle } from '../components';

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
          <HeaderFont>Airport Status Page</HeaderFont>
          <LogoSubtitle>
            <img
              src={FlightStatsLogo}
              alt="FlightStats logo"
              style={{
                display: 'block',
                maxWidth: '40px',
                maxHeight: '40px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
            <SubheaderFont>FlightStats 2015</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>
          On the{' '}
          <LinkText
            href="https://www.flightstats.com/v2/airports/departing-arriving"
            target="_blank"
            rel="noopener noreferrer">
            {'FlightStats departures and arrivals page'}
          </LinkText>
          , several filters can be applied to see a list of an airport's
          flights. FlightStats describes this web page from my early career as
          "the most powerful airport departure and arrival feature on the
          market".
        </ParagraphFont>
        <ParagraphFont>
          The FlightStats APIs "contain over 300 data elements per flight
          record, making them the most comprehensive & detailed source of
          real-time information available".{' '}
          <LinkText
            href="https://www.flightstats.com/company/products/flight-data-services/"
            target="_blank"
            rel="noopener noreferrer">
            {'[FlightStats Flight Data Services]'}
          </LinkText>
          .
        </ParagraphFont>
        <ParagraphFont>
          The Delay Index API for the airport and FIDS API (used to power FIDS
          boards in airports) combine for a powerful and deeply insightful UX
          around an airport's functioning at a given moment.
        </ParagraphFont>
      </CardTextContent>
    </Card>
  );
};

export default FlightStatsArrivalsDepartures;
