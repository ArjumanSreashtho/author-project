import { lazy } from 'react';

import urls from './constants/urls';

// Lazy importing author module
const AllAuthors = lazy(() => import("./pages/Authors/All"));
const FavoriteAuthors = lazy(() => import("./pages/Authors/Favorites"));

// Routes mapping
const routes = [
  {
    path: urls.AUTHORS,
    component: AllAuthors
  },
  {
    path: urls.FAVORITE_AUTHORS,
    component: FavoriteAuthors
  }
];

export default routes;