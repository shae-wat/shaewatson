import React from 'react';
import { HeaderFont, SubheaderFont, ParagraphFont, rhythm } from '../../styles';
import { AlaskaDispatchNewsDropdownImageSrc } from '../../images';
import { Dropdown, DropdownOptionKey } from '../components';
import { Card, CardTextContent, CardImageContent } from '.';

class CustomDropdown extends React.Component {
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
          <Dropdown
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
          <ParagraphFont>
            Dropdown value labels generated using{' '}
            <a
              href="https://hipsum.co/"
              target="_blank"
              rel="noopener noreferrer">
              Hipster Ipsum
            </a>
          </ParagraphFont>
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
