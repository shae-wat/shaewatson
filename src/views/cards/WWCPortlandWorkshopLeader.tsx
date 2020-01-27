import React from 'react';
import { WWCNegotiationWorkshopSrc, ClaraLogo, SofiLogo } from '../../images';
import {
  HeaderFont,
  SubheaderFont,
  ParagraphFont,
  rhythm,
  LogoSubtitle,
  Card,
  CardTextContent,
  CardImageContent,
  gutter,
} from '../../styles';

const WWCPortlandWorkshopLeader: React.FC = () => {
  return (
    <Card firstWidth={50} lastWidth={50} lastJustifyContentCenter>
      <CardTextContent paddingTop={rhythm(1)}>
        <span>
          <HeaderFont>Sharing the good news</HeaderFont>
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
            <SubheaderFont>Clara Lending </SubheaderFont>
            <SubheaderFont style={{ marginLeft: `${gutter(1 / 2)}px` }}>
              {' - '}
            </SubheaderFont>
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
                marginLeft: `${gutter(1 / 2)}px`,
              }}
            />
            <SubheaderFont>SoFi 2018</SubheaderFont>
          </LogoSubtitle>
        </span>
        <ParagraphFont>...</ParagraphFont>
        <ParagraphFont>...</ParagraphFont>
        <ParagraphFont>...</ParagraphFont>
      </CardTextContent>
      <CardImageContent>
        <img
          src={WWCNegotiationWorkshopSrc}
          alt="Dashboard with inputs and search results for flight arrivals and departures"
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
    </Card>
  );
};

export default WWCPortlandWorkshopLeader;
