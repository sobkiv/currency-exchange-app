import { createContext, useCallback } from 'react';
import { useSnackbar } from 'notistack';
import Alert from '@mui/material/Alert';

export const SnackbarContext = createContext({});

export const SnackbarProvider = ({ children }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const snackbar = useCallback(
    (message, options = {}) => {
      enqueueSnackbar(message, {
        content: (key) => (
          <Alert
            onClose={() => closeSnackbar(key)}
            severity={options.color || 'info'}
            variant="filled"
            sx={{
              fontSize: 16,
              '& .MuiAlert-icon': { alignItems: 'center' },
              '& .MuiAlert-action': { alignItems: 'center', py: 0, pl: 1.5 },
            }}
          >
            {message}
          </Alert>
        ),
        ...options,
      });
    },
    [closeSnackbar, enqueueSnackbar],
  );

  const showSnackbar = useCallback(
    (message, options) =>
      snackbar(message, {
        color: 'info',
        open: true,
        autoHideDuration: 5000,
        ...options,
      }),
    [snackbar],
  );

  return <SnackbarContext.Provider value={showSnackbar}>{children}</SnackbarContext.Provider>;
};
