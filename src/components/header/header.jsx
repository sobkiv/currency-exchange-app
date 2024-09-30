'use client';
import { AppBar, Box, Container, Fade, useMediaQuery } from '@mui/material';
import CurrencyRate from './currency-rate';
import Logo from './logo';
import { useEffect, useState } from 'react';
import { useCurrencyExchangeRates } from '@/hooks/useCurrencyExchangeRates';
import { CURRENCY_CODES } from '@/constants';

const Header = () => {
  const [toggle, setToggle] = useState(CURRENCY_CODES.USD);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const { eur, usd } = useCurrencyExchangeRates();

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setToggle((prev) => (prev === CURRENCY_CODES.USD ? CURRENCY_CODES.EUR : CURRENCY_CODES.USD));
      }, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  const renderMobileCurrencyRates = () => (
    <>
      <Fade in={toggle === CURRENCY_CODES.USD} timeout={600} unmountOnExit>
        <Box sx={{ position: 'absolute', top: 0, width: '100%' }}>
          <CurrencyRate currency={usd} currencyName={CURRENCY_CODES.USD} />
        </Box>
      </Fade>
      <Fade in={toggle === CURRENCY_CODES.EUR} timeout={600} unmountOnExit>
        <Box sx={{ position: 'absolute', top: 0, width: '100%' }}>
          <CurrencyRate currency={eur} currencyName={CURRENCY_CODES.EUR} />
        </Box>
      </Fade>
    </>
  );

  const renderDesktopCurrencyRates = () => (
    <>
      <CurrencyRate currency={usd} currencyName={CURRENCY_CODES.USD} />
      <CurrencyRate currency={eur} currencyName={CURRENCY_CODES.EUR} />
    </>
  );

  return (
    <AppBar
      component="header"
      sx={{
        height: { xs: 52, sm: 72 },
        zIndex: 1300,
        position: 'sticky',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo />
        <Box sx={{ display: 'flex', alignItems: 'center', lineHeight: 'normal' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              minWidth: { xs: 1, sm: '350px' },
              alignItems: 'center',
              justifyContent: 'flex-end',
              position: 'relative',
              minHeight: '25px',
            }}
          >
            {isMobile ? renderMobileCurrencyRates() : renderDesktopCurrencyRates()}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
