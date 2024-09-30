/** @type {import('@mui/material').ThemeOptions['components']['MuiButton']} */
export const MuiButton = {
  styleOverrides: {
    sizeLarge: ({ theme }) => ({
      padding: theme.spacing(2),
    }),
    contained: {
      borderRadius: 32,
      textTransform: 'initial',
    },
    sizeSmall: {
      fontSize: '0.75rem',
    },
    root: ({ ownerState, theme }) => {
      if (ownerState.variant === 'link') {
        if (ownerState.color === 'primary') {
          return {
            color: 'white',
            backgroundColor: theme.palette.primary.main,
            boxShadow: 'none',
            borderRadius: 20,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
              boxShadow: 'none',
            },
          };
        }
        if (ownerState.color === 'white') {
          return {
            backgroundColor: 'white',
            color: theme.palette.black.main,
            boxShadow: 'none',
            borderRadius: 20,
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.black.main,
              boxShadow: 'none',
            },
          };
        }
        if (ownerState.color === 'transparent') {
          return {
            backgroundColor: 'none',
            background: 'none',
            border: '1px solid',
            color: theme.palette.black.light,
            borderColor: theme.palette.black.light,
            boxShadow: 'none',
            borderRadius: 20,
            fontSize: 12,
            '&:hover': {
              backgroundColor: 'none',
              color: theme.palette.black.main,
              borderColor: theme.palette.black.main,
              boxShadow: 'none',
            },
          };
        }
      }

      return {
        fontSize: '1rem',
        lineHeight: 1.5,
        fontWeight: 600,
      };
    },
  },
};
