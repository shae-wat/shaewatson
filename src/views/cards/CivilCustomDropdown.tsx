import React from 'react';
import styled from 'styled-components';
import {
  Colors,
  HeaderFont,
  SubheaderFont,
  ParagraphFont,
  MicroFont,
  LinkText,
  rhythm,
  gutter,
  LogoSubtitle,
  Card,
  CardTextContent,
  CardImageContent,
} from '../../styles';
import { AlaskaDispatchNewsDropdownImageSrc, CivilLogo } from '../../images';
import { Dropdown, DropdownOptionKey, ColorSelector } from '../components';

const brandColors = [
  Colors.darkBlue,
  Colors.lightPurple,
  Colors.tanPink,
  Colors.millenialPink,
  Colors.red,
];

const DemoArea = styled.div`
  padding: ${rhythm(1)}px 0;
  background-color: ${Colors.white};
  border-radius: 4px;
  color: ${Colors.background};
  padding: ${rhythm(1)}px ${gutter(1)}px;
`;

interface CustomDropdownState {
  brandColor: typeof Colors.millenialPink;
}

class CustomDropdown extends React.Component<{}, CustomDropdownState> {
  state = {
    brandColor: brandColors[0],
  };

  render() {
    return (
      <Card firstWidth={55} lastWidth={45}>
        <CardTextContent paddingTop={rhythm(1 / 2)}>
          <span>
            <HeaderFont>Customizable Dropdown React Component</HeaderFont>
            <LogoSubtitle>
              <img
                src={CivilLogo}
                alt="Civil Comments logo"
                style={{
                  display: 'block',
                  maxWidth: '30px',
                  maxHeight: '30px',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
              <SubheaderFont>Civil Comments 2016</SubheaderFont>
            </LogoSubtitle>
          </span>
          <ParagraphFont>
            I contributed to a third party Javascript commenting app that could
            be customized to match the brand colors of its host webpage (mostly
            newspapers).
          </ParagraphFont>
          <ParagraphFont>
            Because of this, it was a nice touch to build a dropdown menu that
            could inherit the colors of the host site dynamically.
          </ParagraphFont>
          <DemoArea>
            <ColorSelector
              options={brandColors}
              onColorClick={(brandColor: typeof Colors.millenialPink) =>
                this.setState({ brandColor })
              }
              selectedColor={this.state.brandColor}
            />
            <Dropdown
              color={this.state.brandColor}
              options={[
                {
                  value: DropdownOptionKey.HIGHEST_RATED,
                  label: 'Farm to Table',
                },
                {
                  value: DropdownOptionKey.NEWEST_FIRST,
                  label: 'Cold Pressed',
                },
                {
                  value: DropdownOptionKey.MOST_REACTIONS,
                  label: 'Local',
                },
                {
                  value: DropdownOptionKey.MOST_DISAGREED,
                  label: 'Bicycle',
                },
                {
                  value: DropdownOptionKey.OLDEST_FIRST,
                  label: 'Organic',
                },
              ]}
            />
          </DemoArea>
          <MicroFont>
            Dropdown value labels generated using{' '}
            <LinkText
              href="https://hipsum.co/"
              target="_blank"
              rel="noopener noreferrer">
              Hipster Ipsum
            </LinkText>
          </MicroFont>
        </CardTextContent>
        <CardImageContent>
          <img
            src={AlaskaDispatchNewsDropdownImageSrc}
            alt="View of comment app with dropdown matching the page color scheme"
            style={{
              display: 'block',
              maxWidth: '810px',
              maxHeight: '404px',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </CardImageContent>
      </Card>
    );
  }
}

export default CustomDropdown;
