import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

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

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppCacheProvider {...pageProps}>
        <Head>
          <title>Welcome to nextapp-ai-ideas!</title>
        </Head>
        <main className="app">
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </main>
      </AppCacheProvider>
    </>
  );
}

export default CustomApp;
