import React from 'react';
import { Box, Typography } from '@mui/material';
import { removeLeadingAndTrailingZeros } from '@/helpers';

const ExchangeTitle = ({ currencies, fromCurrency, toCurrency, fromCurrencyValue, toCurrencyValue }) => {
  return (
    <Box
      component={'h1'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        mt: 4,
      }}
    >
      <Box
        component={'span'}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          fontSize: { xs: 25, sm: 32 },
          letterSpacing: 1.5,
        }}
      >
        {fromCurrencyValue ? (
          <Typography component={'span'} sx={{ fontSize: { xs: 25, sm: 32 }, fontWeight: 600, lineHeight: 'normal' }}>
            {removeLeadingAndTrailingZeros(fromCurrencyValue)}&nbsp;
          </Typography>
        ) : null}
        <Typography component={'span'} sx={{ fontSize: { xs: 25, sm: 32 }, letterSpacing: 1.5, lineHeight: 'normal' }}>
          {`${currencies[fromCurrency]} equal`}&nbsp;
        </Typography>
      </Box>
      <Box
        component={'span'}
        sx={{
          mt: 1.5,
          display: 'flex',
          flexWrap: 'wrap',
          fontSize: { xs: 25, sm: 32 },
          letterSpacing: 1.5,
        }}
      >
        {toCurrencyValue ? (
          <Typography component={'span'} sx={{ fontSize: { xs: 25, sm: 32 }, fontWeight: 600, lineHeight: 'normal' }}>
            {removeLeadingAndTrailingZeros(toCurrencyValue)}&nbsp;
          </Typography>
        ) : null}
        <Typography
          component={'span'}
          sx={{ fontSize: { xs: 25, sm: 32 }, letterSpacing: 1.5, lineHeight: 'normal' }}
        >{`${currencies[toCurrency]}`}</Typography>
      </Box>
    </Box>
  );
};

export default ExchangeTitle;
