import React from 'react';
import './App.css';
import Catalog from './pages/catalog';
import CatalogId from './pages/catalogId';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Dashboard from './pages/dashboard';
import NotFound from './pages/nopage';
import ProductDetail from './pages/productDetail';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom';

function App() {
  const RequireAuth = () => {
    let isAuth = localStorage.getItem('access_token');

    if (!isAuth) {
      return <Navigate to='/' />;
    }
    return <Outlet />;
  };

  const NoAuth = () => {
    const isAuth = localStorage.getItem('access_token');

    if (isAuth) {
      return <Navigate to='/' />;
    }

    return <Outlet />;
  };

  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            {/* Public Route */}
            <Route path='/' element={<Catalog />} />
            <Route path='/:productId' element={<ProductDetail/>} />

            {/* Auth Route */}
            <Route element={<NoAuth />}>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>

            {/* Protected Route */}
            <Route element={<RequireAuth />}>
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>

            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
