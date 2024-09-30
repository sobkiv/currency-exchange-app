import { getAvailableCurrencies, getCurrencyRates } from '@/shared/api/currencies';

export function currencyRatesQuery(params) {
  const { currencyName } = params;
  return {
    queryKey: ['currencyRates', params],
    queryFn: () => getCurrencyRates(currencyName),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  };
}

export function prefetchCurrencyExchangeRates(queryClient, params = {}) {
  const { currencyName } = params;
  return queryClient.prefetchQuery(currencyRatesQuery({ currencyName }));
}

export function availableCurrencyQuery() {
  return {
    queryKey: ['currencies'],
    queryFn: () => getAvailableCurrencies(),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  };
}

export function prefetchAvailableCurrency(queryClient) {
  return queryClient.prefetchQuery(availableCurrencyQuery());
}
