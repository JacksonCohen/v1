import { createCss } from '@stitches/react';

export const { styled, keyframes, global } = createCss({
  theme: {
    colors: {
      light0: '#e1e2ef',
      light1: '#ebe9e9',
      dark0: '#373850',
      dark1: '#232c33',
      accent0: '#ffa600',
      accent1: '#007cc6',
    },
    fontSizes: {
      f0: '.8rem',
      f1: '1rem',
      f2: '1.2rem',
      f3: '1.5rem',
      f4: '2rem',
      f5: '2.5rem',
    },
  },
  media: {
    bp0: '(max-width: 480px)',
    bp1: '(min-width: 481px) and (max-width: 768px)',
    bp2: '(min-width: 769px) and (max-width: 1024px)',
    bp3: '(min-width: 1025px)',
  },
});
