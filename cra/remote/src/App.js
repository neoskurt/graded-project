import React from 'react';

import LocalButton from './Button';

const Header = React.lazy(() => import('shared/Header'));
const Footer = React.lazy(() => import('shared/Footer'));
const App = () => (
  <div>
      <React.Suspense fallback="Loading Header">
      <Header />
    </React.Suspense>
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
      <React.Suspense fallback="Loading Footer">
      <Footer />
    </React.Suspense>
  </div>
);

export default App;
