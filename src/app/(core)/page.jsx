import { Container } from '@mui/material';
import CurrencyConverter from '@/components/currency-converter/currency-converter';

export default async function HomePage() {
  return (
    <Container component="main" sx={{ minHeight: { xs: 'calc(93vh - 52px)', sm: 'calc(93vh - 72px)' } }}>
      <CurrencyConverter />
    </Container>
  );
}
