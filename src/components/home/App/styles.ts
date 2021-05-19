import { global, config } from 'src/stitches.config';

const { light1, dark1 } = config.theme.colors;

export const globalStyles = global({
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: 'Open Sans',
    scrollbarWidth: 'thin',
    scrollbarColor: `${light1} ${dark1}`,
  },
});
