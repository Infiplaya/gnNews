import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MantineProvider } from '@mantine/core';

import Root from './routes/root';
import ErrorPage from './error-page';
import Country from './components/Country';
import Feed from './components/Feed';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Feed />
      },
      {
        path: "country/:kraj",
        element: <Country />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
)
