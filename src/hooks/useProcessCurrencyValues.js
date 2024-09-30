import { useState } from 'react';

const useProcessCurrenciesValues = (rates) => {
  const [fromCurrencyValue, setFromCurrencyValue] = useState('1');
  const [toCurrencyValue, setToCurrencyValue] = useState(String(rates.usd.uah.toFixed(5)));

  const processEmptyInput = (value) => {
    if (value === '.') return false;
    const isEmptyString = Number.isNaN(parseFloat(value));

    if (isEmptyString) {
      setFromCurrencyValue('');
      setToCurrencyValue('');
    }
    return isEmptyString;
  };

  return {
    fromCurrencyValue,
    setFromCurrencyValue,
    toCurrencyValue,
    setToCurrencyValue,
    processEmptyInput,
  };
};

export default useProcessCurrenciesValues;
