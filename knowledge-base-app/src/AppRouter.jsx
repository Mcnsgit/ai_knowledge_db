import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';

import './App.css';

const Home = lazy(() => import('./pages/Home'));
const FaQ = lazy(() => import('./pages/FaQs'));
const Docs = lazy(() => import('./pages/Docs'));
const Editor = lazy(() => import('./pages/Editor'));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/faq" element={<FaQ />} />
            <Route path="/editor" element={<Editor />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
};

export default AppRouter;