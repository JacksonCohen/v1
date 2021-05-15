import createCss from '@stitches/react';

export const { styled } = createCss({
  theme: {
    colors: {
      lightest: '#d8d8f6',
      light: '#b18fcf',
      middle: '#978897',
      dark: '#494850',
      darkest: '#2c2c34',
    },
    fontSizes: {
      0: '.8rem',
      1: '1rem',
      2: '1.2rem',
      3: '1.5rem',
      4: '2rem',
    },
  },
});
