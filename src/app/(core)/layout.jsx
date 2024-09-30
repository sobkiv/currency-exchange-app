import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { prefetchAvailableCurrency, prefetchCurrencyExchangeRates } from '@/shared/queries/currencies';
import Header from '@/components/header/header';
import Footer from '@/components/footer';

export const revalidate = false;

export default async function MainLayout({ children }) {
  const queryClient = new QueryClient();

  await Promise.all([
    prefetchCurrencyExchangeRates(queryClient, { currencyName: 'eur' }),
    prefetchCurrencyExchangeRates(queryClient, { currencyName: 'usd' }),
    prefetchCurrencyExchangeRates(queryClient, { currencyName: 'uah' }),
    prefetchAvailableCurrency(queryClient),
  ]);
  const state = dehydrate(queryClient);

  return (
    <>
      <HydrationBoundary state={state}>
        <Header />
        {children}
        <Footer />
      </HydrationBoundary>
    </>
  );
}
