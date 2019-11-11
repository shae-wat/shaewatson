import _ from 'lodash';

export const breakpoints = {
  large: 1200,
  desktop: 1024,
  tablet: 768,
  mobile: 480,
};

export const mediaQuery = ({
  min,
  max,
  cssForQueryToApply,
}: {
  cssForQueryToApply: string;
  min?: number;
  max?: number;
}) => {
  return _.isNil(min) && _.isNil(max)
    ? cssForQueryToApply
    : `@media screen ${!_.isNil(min) ? `and (min-width: ${min}px)` : ``} ${
        !_.isNil(max) ? `and (max-width: ${max}px)` : ``
      }{
    ${cssForQueryToApply};
  }`;
};

export const mobileMediaQuery = (cssForQueryToApply: string) =>
  mediaQuery({ max: breakpoints.mobile, cssForQueryToApply });

export const tabletMediaQuery = (cssForQueryToApply: string) =>
  mediaQuery({
    max: breakpoints.tablet,
    cssForQueryToApply,
  });

export const desktopMediaQuery = (cssForQueryToApply: string) =>
  mediaQuery({ min: breakpoints.mobile + 1, cssForQueryToApply });
