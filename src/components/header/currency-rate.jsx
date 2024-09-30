import { Box, Typography } from '@mui/material';
import { CURRENCY_CODES } from '@/constants';

const CurrencyRate = ({ currency, currencyName }) => {
  return (
    <Box sx={{ width: 1, display: 'flex', justifyContent: 'flex-end' }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', lineHeight: 'normal', gap: 0.5 }}>
        <Typography sx={{ fontSize: 18, fontWeight: 600, lineHeight: 'normal', color: '#FFF8F3' }}>1</Typography>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', lineHeight: 'normal', gap: { xs: 0.8, sm: 1.2 } }}>
          <Typography
            sx={{
              fontSize: { xs: 10, sm: 12 },
              lineHeight: 'normal',
              color: '#ECDFCC',
              textTransform: 'uppercase',
              mb: { xs: 0.3, sm: 0.25 },
            }}
          >
            {currencyName}
          </Typography>
          <Typography sx={{ fontSize: 12, lineHeight: 'normal', alignSelf: 'center', color: '#FFF8F3' }}>=</Typography>
          <Typography sx={{ fontSize: 18, fontWeight: 600, lineHeight: 'normal', color: '#FFF8F3' }}>
            {currency?.uah?.toFixed(2)}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: 10, sm: 12 },
            lineHeight: 'normal',
            color: '#FFF8F3',
            mb: { xs: 0.3, sm: 0.25 },
            textTransform: 'uppercase',
          }}
        >
          {CURRENCY_CODES.UAH}
        </Typography>
      </Box>
    </Box>
  );
};

export default CurrencyRate;
