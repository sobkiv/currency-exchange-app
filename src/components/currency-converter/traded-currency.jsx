import React, { useRef } from 'react';
import { Box, MenuItem, Select, TextField } from '@mui/material';
import Image from 'next/image';
import { currenciesCodes, FLAG_BASE_URL } from '@/constants';
import { firstDigitGroupHasOneDigit, removeLeadingAndTrailingZeros, removeLeadingZeros } from '@/helpers';
import formattingIntegerPartInGroups from '@/utils/formattingIntegerPartIntoGroups';
import sanitizeToFiveDigitsDecimal from '@/utils/sanitize-to-five-digits-decimal';

const CurrencyFlag = ({ currencyCode }) => (
  <Box sx={{ ml: 1, mr: -1.3, mt: 0.6, width: 40 }}>
    <Image
      width="24"
      height="18"
      src={`${FLAG_BASE_URL}${currencyCode}.svg`}
      alt={`${currencyCode} flag`}
      style={{ marginRight: 8 }}
    />
  </Box>
);

const TradedCurrency = ({
  tradedCurrencyCode,
  oppositeTradedCurrencyCode,
  setTradedCurrencyCode,
  tradedCurrencyValue,
  oppositeTradedCurrencyValue,
  setTradedCurrencyValue,
  setOppositeTradedCurrencyValue,
  inputCurrencyType,
  activeInputCurrencyType,
  setActiveInputCurrencyType,
  processEmptyInput,
  convertCurrency,
}) => {
  const inputRef = useRef(null);

  const handleFigureChange = (value, fromCurrency, toCurrency, setAmount, setOppositeAmount) => {
    const cursorPosition = inputRef.current.selectionStart;
    const sanitizedValue = formattingIntegerPartInGroups(sanitizeToFiveDigitsDecimal(value));
    if (processEmptyInput(sanitizedValue)) return;

    setAmount(sanitizedValue);
    convertCurrency(sanitizedValue, fromCurrency, toCurrency, setOppositeAmount);

    const valueWithoutLeadingZeros = removeLeadingZeros(sanitizedValue);
    const absoluteCursorPosition = firstDigitGroupHasOneDigit(valueWithoutLeadingZeros)
      ? cursorPosition + 1
      : cursorPosition;

    setTimeout(() => {
      inputRef.current.setSelectionRange(absoluteCursorPosition, absoluteCursorPosition);
    }, 1);
  };

  const handleCurrencyChange = (newCurrencyCode) => {
    const isActiveInput = activeInputCurrencyType === inputCurrencyType;
    const fromCurrencyValue = isActiveInput ? tradedCurrencyValue : oppositeTradedCurrencyValue;
    const fromCurrencyCode = isActiveInput ? newCurrencyCode : oppositeTradedCurrencyCode;
    const toCurrencyCode = isActiveInput ? oppositeTradedCurrencyCode : newCurrencyCode;
    const setFromCurrencyValue = isActiveInput ? setTradedCurrencyValue : setOppositeTradedCurrencyValue;
    const setToCurrencyValue = isActiveInput ? setOppositeTradedCurrencyValue : setTradedCurrencyValue;

    setTradedCurrencyCode(newCurrencyCode);
    handleFigureChange(fromCurrencyValue, fromCurrencyCode, toCurrencyCode, setFromCurrencyValue, setToCurrencyValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: 1, maxWidth: { xs: 1, sm: 325 }, gap: 2 }}>
      <Select
        sx={{ textTransform: 'uppercase' }}
        value={tradedCurrencyCode}
        renderValue={() => tradedCurrencyCode || 'Select your currency'}
        onChange={(e) => handleCurrencyChange(e.target.value)}
        startAdornment={<CurrencyFlag currencyCode={tradedCurrencyCode} />}
      >
        {currenciesCodes.map((currencyCode) => (
          <MenuItem key={currencyCode} sx={{ textTransform: 'uppercase', lineHeight: 'normal' }} value={currencyCode}>
            <CurrencyFlag currencyCode={currencyCode} />
            {currencyCode}
          </MenuItem>
        ))}
      </Select>

      <TextField
        label="Amount"
        type="text"
        inputRef={inputRef}
        value={tradedCurrencyValue}
        onChange={(e) => {
          setActiveInputCurrencyType(inputCurrencyType);
          handleFigureChange(
            e.target.value,
            tradedCurrencyCode,
            oppositeTradedCurrencyCode,
            setTradedCurrencyValue,
            setOppositeTradedCurrencyValue,
          );
        }}
        onBlur={() => setTradedCurrencyValue(removeLeadingAndTrailingZeros(tradedCurrencyValue))}
      />
    </Box>
  );
};

export default TradedCurrency;
