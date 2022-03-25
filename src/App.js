import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner';

import urls from './constants/urls';

import './App.css';

// Lazy loading components
const DefaultLayout = lazy(() => import('./pages/DefaultLayout'));


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path={urls.DEFAULT} element={<DefaultLayout />}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
