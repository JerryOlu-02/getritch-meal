import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/NavBar/Navbar';
import '../sass/App.scss';
import { createRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFooterRef } from '../store';
import { setCurrentUser } from '../store';
// import { auth } from '../firebase';
import { supabase } from '../supabaseClient';
// import { useSupabaseClient } from '@supabase/auth-helpers-react';

const Root = function () {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const navbarRef = createRef();
  const footerRef = createRef();

  const scrollToTop = function () {
    navbarRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    dispatch(setFooterRef(footerRef));
  }, [dispatch, footerRef]);

  // Auth
  // useEffect(() => {
  //   const unsubsribe = auth.onAuthStateChanged((user) => {
  //     dispatch(setCurrentUser(user));

  //     // After User is gotten set loading to false
  //     setLoading(false);
  //   });

  //   return () => {
  //     unsubsribe();
  //   };
  // }, [dispatch]);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);

      dispatch(setCurrentUser(session?.user));

      setLoading(false);
    });
  }, [dispatch]);

  return (
    <>
      {!loading && (
        <main className="main">
          <Navbar ref={navbarRef} />

          <Outlet />

          <Footer onClick={scrollToTop} ref={footerRef} />
        </main>
      )}
    </>
  );
};
export default Root;
