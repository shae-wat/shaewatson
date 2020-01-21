import React from 'react';
import {
  HeaderFont,
  SubheaderFont,
  ParagraphFont,
  LinkText,
  LogoSubtitle,
  Card,
  CardTextContent,
  CardImageContent,
} from '../../styles';
import { FSDepArrImageSrc, FlightStatsLogo } from '../../images';

const FlightStatsArrivalsDepartures: React.FC = () => {
  return (
    <Card firstWidth={45} lastWidth={50} lastJustifyContentCenter>
      <CardTextContent>
        <span>
          <HeaderFont>Airport Status Page</HeaderFont>
          <LogoSubtitle>
            <img
              src={FlightStatsLogo}
              alt="FlightStats logo"
              style={{
                display: 'block',
                maxWidth: '30px',
                maxHeight: '30px',
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
          real-time information available".
        </ParagraphFont>
        <ParagraphFont>
          The Delay Index API for the airport and FIDS API (like the FIDS boards
          in airports) combine for a powerful and deeply insightful UX around an
          airport's functioning at a given moment.
        </ParagraphFont>
      </CardTextContent>
      <CardImageContent>
        <img
          src={FSDepArrImageSrc}
          alt="Dashboard with inputs and search results for flight arrivals and departures"
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
    </Card>
  );
};

export default FlightStatsArrivalsDepartures;
