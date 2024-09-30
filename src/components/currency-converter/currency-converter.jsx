'use client';
import { useState } from 'react';
import { Box } from '@mui/material';
import { useCurrencyExchangeRates } from '@/hooks/useCurrencyExchangeRates';
import { useQuery } from '@tanstack/react-query';
import { availableCurrencyQuery } from '@/shared/queries/currencies';
import { deleteSpacesWithinString, removeLeadingAndTrailingZeros } from '@/helpers';
import formattingIntegerPartInGroups from '@/utils/formattingIntegerPartIntoGroups';
import ExchangeTitle from './exchange-title';
import TradedCurrency from '@/components/currency-converter/traded-currency';
import useProcessCurrenciesValues from '@/hooks/useProcessCurrencyValues';
import SwitchCurrenciesButton from '@/components/currency-converter/switch-currencies-button';
import { CURRENCY_CODES, TRADE_TYPE } from '@/constants';

const CurrencyConverter = () => {
  const rates = useCurrencyExchangeRates();
  const { data: currencies } = useQuery(availableCurrencyQuery());

  const { fromCurrencyValue, setFromCurrencyValue, toCurrencyValue, setToCurrencyValue, processEmptyInput } =
    useProcessCurrenciesValues(rates);

  const [fromCurrency, setFromCurrency] = useState(CURRENCY_CODES.USD);
  const [toCurrency, setToCurrency] = useState(CURRENCY_CODES.UAH);
  const [activeInput, setActiveInput] = useState(TRADE_TYPE.SELLING);

  const convertCurrency = (value, fromCurrency, toCurrency, setAmount) => {
    if (processEmptyInput(value)) return;
    rates
      .refetch()
      .then(() => {
        const rate = rates[fromCurrency][toCurrency];
        const convertedAmount = (parseFloat(deleteSpacesWithinString(value)) * rate).toFixed(5);
        const formattedAmount = formattingIntegerPartInGroups(convertedAmount);

        setAmount(removeLeadingAndTrailingZeros(formattedAmount));
      })
      .catch((err) => {
        console.error('Refetch failed:', err);
      });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mx: 'auto', maxWidth: 715 }}>
      <ExchangeTitle
        currencies={currencies}
        fromCurrency={fromCurrency}
        fromCurrencyValue={fromCurrencyValue}
        toCurrency={toCurrency}
        toCurrencyValue={toCurrencyValue}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          mt: { xs: 2, sm: 3 },
        }}
      >
        <TradedCurrency
          inputCurrencyType={TRADE_TYPE.SELLING}
          convertCurrency={convertCurrency}
          processEmptyInput={processEmptyInput}
          tradedCurrencyValue={fromCurrencyValue}
          oppositeTradedCurrencyValue={toCurrencyValue}
          oppositeTradedCurrencyCode={toCurrency}
          setOppositeTradedCurrencyValue={setToCurrencyValue}
          activeInputCurrencyType={activeInput}
          setActiveInputCurrencyType={setActiveInput}
          setTradedCurrencyCode={setFromCurrency}
          setTradedCurrencyValue={setFromCurrencyValue}
          tradedCurrencyCode={fromCurrency}
        />
        <SwitchCurrenciesButton
          activeInput={activeInput}
          convertCurrency={convertCurrency}
          fromCurrencyValue={fromCurrencyValue}
          toCurrencyValue={toCurrencyValue}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          setFromCurrency={setFromCurrency}
          setToCurrency={setToCurrency}
          setToCurrencyValue={setToCurrencyValue}
          setFromCurrencyValue={setFromCurrencyValue}
        />
        <TradedCurrency
          inputCurrencyType={TRADE_TYPE.BUYING}
          convertCurrency={convertCurrency}
          processEmptyInput={processEmptyInput}
          tradedCurrencyValue={toCurrencyValue}
          oppositeTradedCurrencyValue={fromCurrencyValue}
          oppositeTradedCurrencyCode={fromCurrency}
          setOppositeTradedCurrencyValue={setFromCurrencyValue}
          activeInputCurrencyType={activeInput}
          setActiveInputCurrencyType={setActiveInput}
          setTradedCurrencyCode={setToCurrency}
          setTradedCurrencyValue={setToCurrencyValue}
          tradedCurrencyCode={toCurrency}
        />
      </Box>
    </Box>
  );
};

export default CurrencyConverter;
