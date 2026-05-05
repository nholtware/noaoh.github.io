import 'tailwindcss/tailwind.css';
import './globalStyles.scss';

import type {LinksFunction} from 'react-router';
import {Links, Meta, Outlet, Scripts, ScrollRestoration} from 'react-router';

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
      </head>
      <body className="bg-black">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
