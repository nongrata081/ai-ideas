import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import CssBaseline from '@mui/material/CssBaseline';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import Box from '@mui/material/Box';

// Types for page layout
export type NextPageWithLayout<P = object, IP = P> = NextPage<
  Partial<P>,
  Partial<IP>
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <AppCacheProvider {...pageProps}>
        <Head>
          <title>Welcome to nextapp-ai-ideas!</title>
        </Head>
        {/* <main className="app">
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </main> */}

        <Box sx={{ display: 'flex' }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Box>
      </AppCacheProvider>
    </>,
  );
}

export default CustomApp;
