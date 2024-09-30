import { useContext } from 'react';
import { SnackbarContext } from '@/providers/snackbar-provider';

export default function useAlert() {
  return useContext(SnackbarContext);
}
