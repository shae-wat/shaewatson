import _ from 'lodash';

export const breakpoints = {
  large: 1200,
  desktop: 1024,
  tablet: 768,
  mobile: 480,
  tiny: 340,
};

export const mediaQuery = ({
  min,
  max,
  css,
}: {
  css: string;
  min?: number;
  max?: number;
}) => {
  return _.isNil(min) && _.isNil(max)
    ? css
    : `@media screen ${!_.isNil(min) ? `and (min-width: ${min}px)` : ``} ${
        !_.isNil(max) ? `and (max-width: ${max}px)` : ``
      }{
    ${css};
  }`;
};

export const finalSqueezeQuery = (css: string) =>
  mediaQuery({ max: breakpoints.tiny, css });

export const mobileMediaQuery = (css: string) =>
  mediaQuery({ max: breakpoints.mobile, css });

export const tabletMediaQuery = (css: string) =>
  mediaQuery({
    max: breakpoints.tablet,
    css,
  });

export const desktopMediaQuery = (css: string) =>
  mediaQuery({ min: breakpoints.mobile + 1, css });
