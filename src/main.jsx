import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Root from './Root/Root';
import Details from './pages/Details/Details';
import Contact from './pages/Contact/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/events.json')
      },
      {
        path: "/login",
        element: <div>login</div>
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch('/events.json')
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
