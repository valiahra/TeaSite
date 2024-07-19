import './App.css';
import Root from './Root';
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SigninPage from './pages/SigninPage/SigninPage';
import SignupPage from './pages/SignupPage/SignupPage';
import axiosInstance, { setAccessToken } from './axiosInstance';
import InfoCard from './pages/InfoCard/InfoCard';
import EditCard from './pages/EditCard.jsx/EditCard';
import ListCoffee from './pages/ListCofee/ListCoffee';

function App() {
  const [user, setUser] = useState({});
  const [teas, setTeas] = useState([]);

  useEffect(() => {
    axiosInstance.get(`api/v1/tokens/refresh`).then((res) => {
      setUser(res.data.user);
      // console.log('+++++++++++++++',user)
      setAccessToken(res.data.accessToken);
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root user={user} setUser={setUser} />,
      children: [
        // {
        //   path: '/',
        //   element: user.username ? (
        //     <HomePage />
        //   ) : (
        //     <p>Зарегистрируйтесь или войдите</p>
        //   ),
        // },
        {
          path: '/',
          element: <HomePage  user={user} setUser={setUser} teas={teas} setTeas={setTeas}/>,
        },
        {
          path: '/admin',
          element: <ListCoffee  user={user} setUser={setUser}  teas={teas} setTeas={setTeas}/>,
        },
        {
          path: '/signin',
          element: <SigninPage setUser={setUser} />,
        },
        {
          path: '/signup',
          element: <SignupPage setUser={setUser} />,
        },
        {
          path: '/tea/:id',
          element: <InfoCard user={user } />,
        },
        {
          path: '/tea/:id/:edit',
          element: <EditCard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

