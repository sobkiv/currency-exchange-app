import { outlinedInputClasses } from '@mui/material/OutlinedInput';

/** @type {import('@mui/material').ThemeOptions['components']['MuiInputLabel]} */
export const MuiInputLabel = {
  styleOverrides: {
    shrink: ({ theme, ownerState }) => {
      if (ownerState.variant === 'outlined') {
        return { transform: `translate(${theme.spacing(4)}, ${theme.spacing(-1)}) scale(0.75)` };
      }
      if (ownerState.variant === 'filled') {
        return { transform: `translate(${theme.spacing(2)}, ${theme.spacing(0.5)}) scale(0.75)` };
      }
    },
    root: ({ theme, ownerState, ...rest }) => {
      const overrideStyles = {
        fontSize: '0.875rem',
      };

      overrideStyles.transform = `translate(${theme.spacing(2)}, ${theme.spacing(2)}) scale(1)`;

      return overrideStyles;
    },
  },
};

/** @type {import('@mui/material').ThemeOptions['components']['MuiFilledInput]} */
export const MuiFilledInput = {
  defaultProps: {
    slotProps: { input: { required: false } },
  },
  styleOverrides: {
    input: ({ ownerState, theme }) => {
      if (ownerState.multiline) return;

      return {
        padding: ownerState.size === 'small' ? theme.spacing(1, 2) : theme.spacing(2.5, 2, 1.5, 2),
      };
    },
    root: ({ ownerState }) => {
      return {
        fontSize: '0.875rem',
        background: '#FAFAFA',
        '&:after': { display: 'none' },
        '&:before': {
          top: 0,
          borderRadius: 32,
          border: '1px solid rgba(93, 93, 93, 0.2)',
          transform: 'none',
          transition: 'none',
        },
        fontWeight: 500,
        '& :-webkit-autofill': {
          transitionDelay: '9999s',
        },
        borderRadius: 32,
        ...(ownerState.color === 'primary' && {
          [`&:hover:not(.Mui-disabled, .Mui-error):before`]: {
            //Hover border color, maybe move it to theme palette as blue[400/500]
            borderColor: '#679DF6',
            border: '1px solid #679DF6',
          },
        }),
        '&.Mui-focused': {
          background: '#FAFAFA',
          borderWidth: '2px',
        },
        '&:hover': {
          background: '#FAFAFA',
        },
      };
    },
  },
};

/** @type {import('@mui/material').ThemeOptions['components']['MuiOutlinedInput]} */
export const MuiOutlinedInput = {
  defaultProps: {
    slotProps: { input: { required: false } },
  },
  styleOverrides: {
    notchedOutline: ({ theme }) => ({
      //Default border color, maybe move it to theme palette as grey[400/500]
      paddingLeft: theme.spacing(3),
      borderColor: 'rgba(93, 93, 93, 0.2)',
    }),
    input: ({ ownerState, theme }) => {
      if (ownerState.multiline) return;

      return {
        padding: ownerState.size === 'small' ? theme.spacing(1, 2) : theme.spacing(2),
      };
    },
    // label: ({ theme }) => ({
    //   paddingLeft: theme.spacing(2),
    // }),
    root: ({ ownerState }) => ({
      fontSize: '0.875rem',
      fontWeight: 500,
      '& :-webkit-autofill': {
        transitionDelay: '9999s',
      },
      borderRadius: 32,
      ...(ownerState.color === 'primary' && {
        [`&:hover:not(.Mui-disabled, .Mui-error) .${outlinedInputClasses.notchedOutline}`]: {
          //Hover border color, maybe move it to theme palette as blue[400/500]
          borderColor: '#679DF6',
        },
      }),
    }),
  },
};
