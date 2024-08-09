import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Blog from './Components/Blog/Blog.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import Roots from './Components/Roots/Roots.jsx';
import JobDetails from './Components/FeatureJobs/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "statistics",
        element: <Statistics />
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: '/job/:id',
        loader: ({ params }) => fetch(`../public/data/jobs.json/${params.id}`),
        element: <JobDetails></JobDetails>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
