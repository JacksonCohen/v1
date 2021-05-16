import { createCss } from '@stitches/react';

export const { styled, keyframes, global } = createCss({
  theme: {
    colors: {
      light: '#e1e2ef',
      lightest: '#ebe9e9',
      dark: '#373850',
      darkest: '#232c33',
      accent1: '#ffa600',
      accent2: '#007cc6',
    },
    fontSizes: {
      0: '.8rem',
      1: '1rem',
      2: '1.2rem',
      3: '1.5rem',
      4: '2rem',
      5: '2.5rem',
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
});
