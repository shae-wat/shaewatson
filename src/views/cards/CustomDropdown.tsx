import React from 'react';
import { HeaderFont, ParagraphFont } from '../../styles';
import { AlaskaDispatchNewsDropdownImageSrc } from '../../images';
import { Dropdown } from '../components';
import { Card, CardTextContent, CardImageContent } from '.';

class CustomDropdown extends React.Component {
  render() {
    return (
      <Card>
        <CardImageContent>
          <img
            src={AlaskaDispatchNewsDropdownImageSrc}
            alt="View of comment app with dropdown matching the page color scheme"
            role="presentation"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
            }}
          />
        </CardImageContent>
        <CardTextContent>
          <HeaderFont>Customizable Dropdown React Component</HeaderFont>
          <ParagraphFont>
            I contibuted to a third party Javascript commenting app that could
            could be customized to match its host webpage- mostly newspapers.
            Because of this, it was a nice touch to build a dropdown menu that
            could inherit the colors of the site dynamically.
          </ParagraphFont>
          <Dropdown />
        </CardTextContent>
      </Card>
    );
  }
}

export default CustomDropdown;
