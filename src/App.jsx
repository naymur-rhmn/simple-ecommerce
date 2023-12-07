import './App.css';
import Intro from './components/Intro';
import Orders from './components/Orders';
import Shop from './components/Shop';
import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: '/',
        index: true, // Use index: true for the default child route
        element: <Intro />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
