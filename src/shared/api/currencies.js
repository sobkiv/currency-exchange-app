import { CURRENCIES_BASE_URL } from '@/constants';

export async function getCurrencyRates(currencyName) {
  const res = await fetch(`${CURRENCIES_BASE_URL}/${currencyName}.json`, {
    cache: 'no-store',
  });
  if (!res.ok) return undefined;

  return res.json();
}

export async function getAvailableCurrencies() {
  const res = await fetch(`${CURRENCIES_BASE_URL}.json`);

  if (!res.ok) return undefined;

  return res.json();
}
