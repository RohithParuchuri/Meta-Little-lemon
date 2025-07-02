import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import React, { useEffect, useState } from 'react';
import MobileBlocker from './MobileBlocker';
import ReservePage from './ReservePage';


const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Simple mobile detection
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      // Checks for Android, iOS, Opera Mini, Windows Phone
      if (/android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(userAgent)) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    checkMobile();
    // Optionally, listen for resize/orientation changes
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return <MobileBlocker />;
  }

  var router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/register',
      element: <RegisterPage />
    },
    {
      path: '/reserve',
      element: <ReservePage />
    },
  ]);
  return (
    <RouterProvider router={router}/>
  );
}

export default App