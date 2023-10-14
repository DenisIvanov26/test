import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  xs: '450px',
  sm: '770px',
  md: '1290px',
  lg: '1800px',
};

const tokens = {
  colors: {
    light: {
      'bg-default': 'linear-gradient(to top, #323232 30%, rgba(0, 0, 0, 0.9))',
    },

    dark: {
      'bg-default': 'linear-gradient(to top, #323232 20%, rgba(0, 0, 0, 0.9))',
    },
  },
};

const semanticTokens = {
  colors: {
    'bg-default': {
      default: tokens.colors.light['bg-default'],
      _dark: tokens.colors.dark['bg-default'],
    },
    // Add shadows here
  },
};

const styles = {
  global: {
    body: {
      fontFamily: 'inter, sans-serif',
      background: 'white',
      backgroundAttachment: 'scroll',
      backgroundRepeat: 'repeat',
      overflowY: 'auto',
      bg: 'white',
      _before: {
        content: "''",
        position: 'fixed',
        top: 0,
        bottom: 0,
        width: '100%',
        background: 'white',
        zIndex: -1,
      },
    },
  },
};

const components = {
  Text: {
    baseStyle: {},
    variants: {
      secondary: {
        color: 'text-secondary',
      },
    },
  },
};

// eslint-disable-next-line import/prefer-default-export
export const theme = extendTheme({
  styles,
  semanticTokens,
  components,
  breakpoints,
});