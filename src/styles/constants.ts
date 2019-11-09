export const gutterSizePx = 16;
export const columnSizePx = 80;

export const rhythmSizePx = 24;

export const appMaxWidth = columnSizePx * 15;

export const gutter = (numGutters: number) => {
  return gutterSizePx * numGutters;
};

export const column = (numColumns: number) => {
  return columnSizePx * numColumns;
};

export const rhythm = (numRhythms: number) => {
  return rhythmSizePx * numRhythms;
};
