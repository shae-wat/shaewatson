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
} from '../../styles';
import { AlaskaDispatchNewsDropdownImageSrc } from '../../images';
import { Dropdown, DropdownOptionKey, ColorSelector } from '../components';
import { Card, CardTextContent, CardImageContent } from '.';

const brandColors = [
  Colors.lightPurple,
  Colors.darkBlue,
  Colors.tanPink,
  Colors.millenialPink,
  Colors.red,
];

const DemoArea = styled.div`
  padding: ${rhythm(1)}px 0;
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
            <SubheaderFont>Civil Comments 2016</SubheaderFont>
          </span>
          <ParagraphFont>
            I contributed to a third party Javascript commenting app that could
            could be customized to match its host webpage- mostly newspapers.
            Because of this, it was a nice touch to build a dropdown menu that
            could inherit the colors of the site dynamically.
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
            role="presentation"
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
