import { MuiInputLabel, MuiOutlinedInput } from './overrides/input';
import { MuiMenu, MuiMenuItem } from './overrides/menu';
import { MuiButton } from './overrides/button';
import { Red_Hat_Display } from '@next/font/google';

const redHatDisplay = Red_Hat_Display({
  weight: ['400', '700'],  // Specify the weights you need
  subsets: ['latin'],  // Include other subsets if necessary
});

/** @type {import('@mui/material').ThemeOptions['typography']} */
function createTypography() {
  return (palette) => ({
    fontFamily: redHatDisplay.style.fontFamily,
    htmlFontSize: 16,
    h1: {
      fontSize: '3.625rem',
      fontWeight: 300,
      lineHeight: 1.4,
      letterSpacing: '-3%',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.86,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.24,
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: 1.32,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.24,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
  });
}

function createPalette() {
  return {
    primary: {
      main: '#4285F4',
    },
    secondary: {
      main: '#CAFB4A',
      contrastText: '#333333',
    },
    error: {
      main: '#F44242',
    },
    black: {
      main: '#1E1E1E',
      light: '#9D9D9D',
      dark: '#000',
    },
    header: {
      main: '#1C1D21',
      contrastText: '#FFF',
    },
    footer: {
      main: '#1C1D21',
      contrastText: '#FFF',
    },
    text: {
      primary: '#333333',
      secondary: '#9D9D9D',
      disabled: '#B6B6B6',
    },
  };
}

/** @type {import('@mui/material').ThemeOptions['components']} */
function createComponents() {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          font-size: 100%;
        }
      `,
    },
    MuiMenu,
    MuiMenuItem,
    MuiButton,
    MuiOutlinedInput,
    MuiInputLabel,
    MuiDialogTitle: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(4),
            paddingLeft: theme.spacing(4),
          },
          paddingTop: theme.spacing(3),
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(4),
          paddingBottom: 0,
          flex: '1 1 auto',
          lineHeight: 1,
          fontSize: 32,
          fontWeight: 600,
        }),
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.up('md')]: {
            padding: theme.spacing(3, 4),
          },
          padding: theme.spacing(3),
        }),
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          color: '#333333',
          margin: 0,
          fontSize: '0.75rem',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.up('md')]: {
            padding: theme.spacing(0, 4, 4),
          },
          padding: theme.spacing(0, 3, 3),
        }),
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          //TODO: maybe change this overflow when we'll have scrollable dialogs
          overflowY: 'initial',
          borderRadius: 16,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          if (ownerState.variant === 'h1') {
            return {
              [theme.breakpoints.down('sm')]: {
                fontSize: '1.75rem',
                lineHeight: 'normal',
              },
            };
          }
          if (ownerState.variant === 'h2') {
            return {
              lineHeight: '1.86rem',
              marginTop: 24,
              color: '#1C1D21',
            };
          }
          if (ownerState.variant === 'h4') {
            return {
              [theme.breakpoints.down('md')]: {
                fontSize: '1.125rem',
                lineHeight: 'normal',
              },
            };
          }
          if (ownerState.variant === 'body1') {
            return {
              color: '#333333',
            };
          }
        },
      },
      defaultProps: {},
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: 'header',
        component: 'nav',
      },
    },
    MuiToolbar: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          minHeight: 52,

          [theme.breakpoints.up('sm')]: {
            minHeight: 72,
          },
        }),
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
      styleOverrides: {
        root: ({ theme }) => ({
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),

          [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(10),
            paddingRight: theme.spacing(10),
          },
        }),
      },
    },
  };
}

export const themeConfig = {
  palette: createPalette(),
  typography: createTypography(),
  components: createComponents(),
  breakpoints: {
    values: {
      xs: 0,
      xxs: 320,
      s: 450,
      sm: 600,
      m: 750,
      md: 900,
      l: 1050,
      lg: 1200,
      xlg: 1360,
      xl: 1440,
    },
  },
};
