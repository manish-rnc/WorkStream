import './App.css';
import Layout from './layout/Layout';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Applicant from './pages/Applicant';
import Recruiter from './pages/Recruiter';
import Jobs from './components/Jobs';
import AddJob from './components/AddJob';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/recruiter/register",
          element: <Register />
        },
        {
          path: "/recruiter/login",
          element: <Login />
        },
        {
          path: "/applicant/register",
          element: <Register />
        },
        {
          path: "/applicant/login",
          element: <Login />
        },
        {
          path: "/applicant",
          element: <Applicant />
        },
        {
          path: "/recruiter",
          element: <Recruiter />
        },
        {
          path: "/allJobs",
          element: <Jobs />
        },
        {
          path: "/recruiter/addJob",
          element: <AddJob />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App;
