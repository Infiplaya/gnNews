import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import { MantineProvider } from '@mantine/core';

import Root from './routes/root';
import ErrorPage from './error-page';
import Feed from './components/Feed';
import { Provider } from 'react-redux';
import store from './store';
import CountryFeed from './components/CountryFeed';

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
        element: <CountryFeed />,
      },
    ],
  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <RouterProvider router={router} />
      </MantineProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
