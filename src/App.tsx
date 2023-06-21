import React, { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Layouts/Root';
import NotFound from './shared/NotFound/NotFound';
import Preloader from './shared/Preloader/Preloader';
import AlQuran from './pages/AlQuran/AlQuran';
import Surah from './pages/Surah/Surah';
import Developer from './pages/Developer/Developer';
import BottomNav from './shared/Navbar/BottomNav';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
    },
    {
      path: "/alQuran",
      element:
        <>
          <BottomNav />
          <AlQuran />
        </>,
    },
    {
      path: "/alQuran/:surah",
      element:
        <>
          <BottomNav />
          <Surah />
        </>,
    },
    {
      path: "/dev",
      element:
        <>
          <BottomNav />
          <Developer />
        </>,
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]
);

function App() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);

  useEffect(() => {
    const disablePinchZoom = (e: any) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }
    document.addEventListener("touchmove", disablePinchZoom, { passive: false })
    return () => {
      document.removeEventListener("touchmove", disablePinchZoom)
    }
  }, [])

  return (
    <>
      {
        loading ? (
          <Preloader />
        ) :
          (
            <>
              <RouterProvider router={router} />
            </>
          )
      }
    </>
  );
}

export default App;
