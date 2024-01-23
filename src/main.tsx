import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './Pages/Home/index.tsx';
import { Success } from './Pages/Success/index.tsx';
import { Checkout } from './Pages/Checkout/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/order/:orderId/success',
        element: <Success />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
