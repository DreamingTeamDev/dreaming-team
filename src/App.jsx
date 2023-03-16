import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// const HomePage = lazy(() => import('./pages/HomePage'));
const FeedbackPage = lazy(() => import('./pages/FeedbackPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Suspense>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<FeedbackPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
