'use client';

import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import globalTheme from '../theme';
import { ReactNode, useMemo, useState } from 'react';
import { CssBaseline } from '@mui/material';
import ColorModeContext, { ColorModeContextType } from './context';
// or `v1X-appRouter` if you are using Next.js v1X

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode: ColorModeContextType = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: string) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  const theme = useMemo(() => {
    const theme = createTheme({
      ...globalTheme,
      palette: {
        mode,
      },
    });
    return { ...globalTheme, ...theme };
  }, [mode, globalTheme]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline enableColorScheme />
              {children}
            </ThemeProvider>
          </ColorModeContext.Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
