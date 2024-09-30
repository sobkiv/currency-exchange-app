import React from 'react';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { IconButton } from '@mui/material';
import { TRADE_TYPE } from '@/constants';

const SwitchCurrenciesButton = ({
  activeInput,
  convertCurrency,
  fromCurrencyValue,
  toCurrencyValue,
  fromCurrency,
  toCurrency,
  setToCurrencyValue,
  setFromCurrencyValue,
  setToCurrency,
  setFromCurrency,
}) => {
  const handleCurrencySwitch = () => {
    const isActiveInputSelling = activeInput === TRADE_TYPE.SELLING;

    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);

    const tradeAmount = !isActiveInputSelling ? toCurrencyValue : fromCurrencyValue;
    const newAmountSetter = isActiveInputSelling ? setToCurrencyValue : setFromCurrencyValue;
    const fromCurrencyType = isActiveInputSelling ? fromCurrency : toCurrency;
    const toCurrencyType = isActiveInputSelling ? toCurrency : fromCurrency;

    convertCurrency(tradeAmount, toCurrencyType, fromCurrencyType, newAmountSetter);
  };

  return (
    <IconButton
      sx={{ height: 50, width: 50, m: 1, ':hover': { transition: 'all 0.2s ease', color: '#4287f5' } }}
      onClick={handleCurrencySwitch}
    >
      <SwapHorizIcon />
    </IconButton>
  );
};

export default SwitchCurrenciesButton;
