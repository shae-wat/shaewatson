import React from 'react';
import { HeaderFont, SubheaderFont, LogoSubtitle } from '../../styles';
import { SauceLabsDashboardImageSrc, SofiLogo } from '../../images';
import { Card, CardTextContent, CardImageContent } from '.';

const RelayOfflineFirst: React.FC = () => {
  return (
    <Card>
      <CardImageContent>
        <img
          src={SauceLabsDashboardImageSrc}
          alt="Dashboard with inputs and search results for mortgage products at Sofi Lending"
          role="presentation"
          style={{
            display: 'block',
            maxWidth: '800px',
            maxHeight: '357px',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </CardImageContent>
      <CardTextContent>
        <HeaderFont>Data loading for offline-first app</HeaderFont>
        <LogoSubtitle>
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
            }}
          />
          <SubheaderFont>SoFi 2018</SubheaderFont>
        </LogoSubtitle>
      </CardTextContent>
    </Card>
  );
};

export default RelayOfflineFirst;
