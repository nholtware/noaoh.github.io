import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import type {LinksFunction} from 'react-router';
import {Links, Meta, Outlet, Scripts, ScrollRestoration} from 'react-router';

import theme from './theme';

export const links: LinksFunction = () => [
  {rel: 'icon', href: '/favicon.ico', sizes: 'any'},
  {rel: 'manifest', href: '/site.webmanifest'},
];

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="notranslate" name="google" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <Meta />
        <Links />
        <meta content="emotion-insertion-point" name="emotion-insertion-point" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Outlet />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
