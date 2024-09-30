import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { currencyRatesQuery } from '@/shared/queries/currencies';
import { CURRENCY_CODES } from '@/constants';

export function useCurrencyExchangeRates() {
  const { data: eurResponse, refetch: refetchEur } = useQuery({
    ...currencyRatesQuery({ currencyName: CURRENCY_CODES.EUR }),
    placeholderData: keepPreviousData,
  });
  const { data: usdResponse, refetch: refetchUsd } = useQuery({
    ...currencyRatesQuery({ currencyName: CURRENCY_CODES.USD }),
    placeholderData: keepPreviousData,
  });
  const { data: uahResponse, refetch: refetchUah } = useQuery({
    ...currencyRatesQuery({ currencyName: CURRENCY_CODES.UAH }),
    placeholderData: keepPreviousData,
  });

  return {
    eur: eurResponse.eur,
    usd: usdResponse.usd,
    uah: uahResponse.uah,
    refetch: () => Promise.all([refetchEur(), refetchUsd(), refetchUah()]),
  };
}
