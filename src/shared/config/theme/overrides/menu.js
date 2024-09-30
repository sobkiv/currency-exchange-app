/** @type {import('@mui/material').ThemeOptions['components']['MuiMenu']} */
export const MuiMenu = {
  styleOverrides: {
    paper: {
      borderRadius: 32,
    },
  },
};

/** @type {import('@mui/material').ThemeOptions['components']['MuiMenuItem']} */
export const MuiMenuItem = {
  defaultProps: {
    divider: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      fontSize: '0.875rem',
      [theme.breakpoints.up('sm')]: {
        minHeight: 54,
      },
    }),
  },
};
