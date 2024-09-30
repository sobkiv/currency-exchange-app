import { Box, Typography } from '@mui/material';

const Logo = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography sx={{ fontSize: { xs: 36, sm: 45 }, width: 'fit-content', color: '#4287f5' }}>C</Typography>
      <Typography
        sx={{ fontSize: { xs: 18, sm: 24 }, lineHeight: 'normal', mb: 0.4, ml: { xs: -1.5, sm: -2.5 }, color: '#FFF8F3' }}
      >
        urrency
      </Typography>
      &nbsp;&nbsp;
      <Typography sx={{ fontSize: { xs: 36, sm: 45 }, width: 'fit-content', color: '#4287f5' }}>C</Typography>{' '}
      <Typography
        sx={{ fontSize: { xs: 18, sm: 24 }, lineHeight: 'normal', mb: 0.4, ml: { xs: -1.5, sm: -2.5 }, color: '#FFF8F3' }}
      >
        onverter
      </Typography>
    </Box>
  );
};

export default Logo;
