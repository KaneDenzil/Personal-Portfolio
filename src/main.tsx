import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './Pages/Home.tsx';
import { SamplePage } from './Pages/SamplePage.tsx';

const router = createBrowserRouter([
  {
    path: "/personal-portfolio/",
    element: <App />,
    children: [
      {
        path: "/personal-portfolio/",
        element: <Home />
      },
      {
        path: "/personal-portfolio/sample-page/",
        element: <SamplePage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
