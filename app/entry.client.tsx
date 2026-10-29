import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';
import {startTransition, StrictMode} from 'react';
import {hydrateRoot} from 'react-dom/client';
import {HydratedRouter} from 'react-router/dom';

// Emotion hoists server-rendered styles into <head>; anchoring them to a fixed meta tag keeps <head> stable for hydration.
const cache = createCache({
  key: 'css',
  insertionPoint: document.querySelector<HTMLMetaElement>('meta[name="emotion-insertion-point"]') ?? undefined,
});

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <CacheProvider value={cache}>
        <HydratedRouter />
      </CacheProvider>
    </StrictMode>,
  );
});
