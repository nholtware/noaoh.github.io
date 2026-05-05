import {index, route, type RouteConfig} from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('currentlyListening', 'routes/currently-listening.tsx'),
  route('githubStars', 'routes/github-stars.tsx'),
  route('vinylCollection', 'routes/vinyl-collection.tsx'),
  route('hnFavorites', 'routes/hn-favorites.tsx'),
  route('api/currentlyListening', 'routes/api.currently-listening.ts'),
  route('api/githubStars', 'routes/api.github-stars.ts'),
  route('api/vinylCollection', 'routes/api.vinyl-collection.ts'),
  route('api/hnFavorites', 'routes/api.hn-favorites.ts'),
] satisfies RouteConfig;
