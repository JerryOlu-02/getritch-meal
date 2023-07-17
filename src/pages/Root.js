import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/NavBar/Navbar';
import '../sass/App.scss';
import { createRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFooterRef } from '../store';

const Root = function () {
  const dispatch = useDispatch();
  const navbarRef = createRef();
  const footerRef = createRef();

  const scrollToTop = function () {
    navbarRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    dispatch(setFooterRef(footerRef));
  }, [dispatch, footerRef]);

  return (
    <main className="main">
      <Navbar ref={navbarRef} />

      <Outlet />

      <Footer onClick={scrollToTop} ref={footerRef} />
    </main>
  );
};
export default Root;
